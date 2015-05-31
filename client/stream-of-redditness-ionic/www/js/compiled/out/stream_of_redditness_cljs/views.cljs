(ns ^:figwheel-always stream-of-redditness-cljs.views
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [stream-of-redditness-cljs.globals :as globals]
              [stream-of-redditness-cljs.util :as util]
              [stream-of-redditness-cljs.auth :as auth]
              [clojure.string :as string]))

(def deep-merge-in! (partial util/deep-merge-in! globals/active-threads-atom))
(def write-in! (partial util/write-in! globals/active-threads-atom))
(def get-in! (partial util/get-in! globals/active-threads-atom))

(defn ^:export authButtonView []
  (om/root
    (fn [data owner]
      (let [storedAuths (auth/users)]
        (if (< 0 (count storedAuths))
          (om/component
            (dom/div nil (dom/span #js {:className "myspan"} "Logged in as: ")
                    (dom/button #js {:className "button button-light" :onClick auth/onAuthSwitchClick} 
                                (dom/a nil (auth/active-user)))))
          (om/component
            (dom/button #js {:className "button button-light" :onClick auth/onAuthNewClick}
                        "Authorize An Account")))))
    globals/auth-atom {:target (. js/document (getElementById "AuthButton"))}))

(defn onMouse [id]
  (fn [e]
    (write-in! [:comment] id)
    (.stopPropagation e)))

(defn myPost [uri params]
  (.emit globals/socket "post" 
         (clj->js {:uri uri :params params
          :headers {:authorization (str "bearer "
                                        (auth/active-access-token))}})))

(defn render-comment [color cpath base-comment]
  (let [buttonAtts (fn [onc] 
                     (clj->js {:className "col button button-small button-clear commentButtonSet"
                               :onClick onc
                               :style {:color (js/whiteOrBlack color)
                                       :backgroundColor color
                                       :marginRight "7px"
                                       :padding "2px"}}))]
    (apply dom/div #js{:className "item" 
                       :onClick (onMouse (:id base-comment))}
           [(dom/p (clj->js {:style {:marginBottom "0px"}})
                   (str (:author base-comment) " * [" 
                        (:score base-comment) "] @ "
                        (.fromNow (.unix js/moment (:time base-comment)))))
            (dom/div #js {:className "row commentbox"}
                     (dom/div #js{:className "col col-center voting" 
                                  :id "updownvotecontainer"}
                              (dom/i #js {:className "icon ion-arrow-up-b"}) 
                              (dom/br nil)
                              (dom/i #js {:className "icon ion-arrow-down-b"}) 
                              (dom/br nil))
                     (dom/div #js{:className "col col-center commentcontent"
                                  :dangerouslySetInnerHTML 
                                  #js {:__html (js/marked (:body base-comment))}}))
            (if (= (:id base-comment) (get-in! [:comment]))
              (dom/div #js {:className "row" 
                            :style #js {:marginBottom "10px;"}}
                       (dom/div (buttonAtts #(%)) "reply")
                       (dom/div (buttonAtts 
                                  (fn [e]
                                    (myPost "https://oauth.reddit.com/api/save"
                                            {:id (str "t1_" (:id base-comment))}))) 
                                "save")
                       (if (= (:author base-comment) 
                              (auth/active-user))
                         (dom/div (buttonAtts #(%)) "edit"))
                       (if (= (:author base-comment) 
                              (auth/active-user))
                         (dom/div (buttonAtts #(%)) "delete"))))
            (apply dom/div #js{:className "list"}
                   (map (partial render-comment color (concat cpath [:comments 
                                                                    (:id base-comment)]))
                        (reverse (sort-by 
                                   :time (vals (:comments base-comment))))))])))

(defn render-base-comment [base-comment]
  (dom/div (clj->js {:style {:backgroundColor (:color base-comment)
                             :paddingLeft "15px" :marginBottom "15px"}})
           (render-comment (:color base-comment) 
                           [(:threadOwnerId base-comment)
                            :comments (:id base-comment)] base-comment)))

(defn render-threads [threads]
  (->> threads
       vals
       (map #(reduce 
               (fn [t k] 
                 (util/deep-merge t 
                                  {:comments {k {:color (:color %)
                                                 :thread-owner-id  (:id %)}}}))
                     % 
                     (keys (:comments %))))

       (reduce util/deep-merge)
       :comments
       vals
       (sort-by :time)
       reverse
       (map render-base-comment)))

(defn stream-view []
  (om/root
    (fn [active-threads owner]
      (om/component 
        (dom/div nil
                 (apply dom/div 
                   #js {:id "threadsReplyBox"
                        :className "row"
                        :style #js {:paddingBottom "28px"
                                    :padding "0px"}}
                   (->> 
                     (:threads active-threads)
                     (filter (fn [[id data]] (:receivedData data)))
                     (map 
                       (fn [[id data]]
                         (dom/div 
                           #js {:className "col" 
                                :style #js {:backgroundColor (:color data)
                                            :paddingBottom "0px"
                                            :padding "8px"}}
                           (dom/div #js {:className "item"
                                         :style #js {:backgroundColor "#fff"}}
                                    (dom/span nil (:title data))
                                    (dom/p nil (str "/r/" (:subreddit data))))
                           (dom/div #js {:className "button button-block button-clear button-small"
                                         :style #js {:marginTop "9px"
                                                     :color (js/whiteOrBlack (:color data))}}
                                    "Add Reply"))))))
                 (apply dom/div #js {:className "list item-text-wrap"} 
                        (render-threads (:threads active-threads))))))
    globals/active-threads-atom
    {:target (. js/document (getElementById "StreamContainer"))}))
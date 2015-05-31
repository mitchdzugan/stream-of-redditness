(ns ^:figwheel-always stream-of-redditness-cljs.util)

(defn deep-map 
  [m f]
  (->> m
       (map (fn [[k v]] 
              (f (cond (map? v) [k (deep-map v f)] 
                       :else [k v]))))
       (into {})))

(defn deep-filter 
  [m f]
  (->> m
       (filter f)
       (map (fn [[k v]] 
              (cond (map? v) [k (deep-filter v f)] 
                    :else [k v])))
       (into {})))

(defn deep-keys-to-keywords [m] (deep-map m (fn [[k v]] [(keyword k) v])))
(defn deep-remove-keys [m ks] (deep-filter m #(not (contains? ks (first %)))))

(defn deep-merge
  [m1 m2]
  (merge-with (fn [x y]
                (cond (map? y) (deep-merge x y)
                      :else y)) 
                 m1 m2))

(defn map-diff 
  "Obtain the minimal changes from map1 to map2.
  The following two expressions are always equal
      (deep-merge m1 (map-diff m1 m2))
      (deep-merge m1 m2)"
  [m1 m2]
  (->> m2
       (map (fn [[k v]]
              (cond (not (contains? m1 k)) {k v}
                    (map? v) (let [nv (map-diff (k m1) v)]
                               (if (= {} nv) {} {k nv}))
                    (seq? v) (if (= 0 (count v)) {} {k v})
                    (= v (k m1)) {}
                    :else {k v})))
       (reduce deep-merge {})))

(defn map-size-bytes
  "Obtain the size in bytes of the JSON
  representation of the map."
  [m]
  (count (.stringify js/JSON (clj->js m))))
  
(defn chunkify-map 
  "Segments a map into chunks where each
  chunk's json representation's size is less
  than the size provided.
  The following two expressions are always equal
      m
      (reduce deep-merge (chunkify-map m s)"
  ([m s] (chunkify-map m s [] {} []))
  ([m s msi cmi kli]
   (let 
     [[rest-messages last-message _] 
      (reduce (fn [[ms cm kl] [k v]]
                (cond (map? v) (let [[nms ncm _] (chunkify-map v s ms cm 
                                                               (conj kl k))]
                                 [nms ncm kl])
                      (seq? v) ()
                      :else (let [jvm (reduce #(hash-map %2 %1) {k v} 
                                              (reverse kl))
                                  nm (deep-merge cm jvm)]
                              (if (< s (map-size-bytes nm)) 
                                [(conj ms cm) jvm kl]
                                [ms nm kl])))) [msi cmi kli] m)]
     (conj rest-messages last-message))))

(defn deep-merge-in! [a z v]
  (swap! a (fn [s] (update-in s z #(deep-merge % v)))))

(defn write-in! [a z v]
  (swap! a #(assoc-in % z v)))

(defn get-in! [a z]
  (get-in @a z))
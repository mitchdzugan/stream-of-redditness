// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

function hexToRgb(hex) {
  if (hex.length == 3 || (hex.length == 4 && hex[0] == "#")) {
    hex = hex.concat(hex.slice(-3));
  }
   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
   return result ? {
       r: parseInt(result[1], 16),
       g: parseInt(result[2], 16),
       b: parseInt(result[3], 16)
   } : null;
}

function whiteOrBlack(hex) {
  var rgb = hexToRgb(hex);

  if (rgb == null) return "#ffffff";

  if (0.18 < (0.2126 * Math.pow((rgb.r/255), 2.2) +  
              0.7151 * Math.pow((rgb.g/255), 2.2) +  
              0.0721 * Math.pow((rgb.b/255), 2.2))) {
    return "#000000";
  }
  return "#ffffff";
}

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/app.html",
    controller: function($scope, $ionicPopup, $timeout, $ionicScrollDelegate) {
      $scope.scrollToTop = function() {
        $timeout(function(){
          $ionicScrollDelegate.scrollTop(true);
        },50)
      }
      stream_of_redditness_cljs.popup.registerPopupShower(
        function (popupDetails) {return $ionicPopup.show(popupDetails)}
        );
      stream_of_redditness_cljs.views.authButtonView();
    }
  })

  .state('app.home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: function($scope) {
    }
  })

  .state('app.stream', {
    url: '/stream?threads&colors',
    templateUrl: 'templates/stream.html',
    controller: function($scope, $state) {
      stream_of_redditness_cljs.ctrls.stream_ctrls($state.params.threads, $state.params.colors);
    }
  })

  .state('app.manage', {
    url: '/manage?threads&colors',
    templateUrl: 'templates/manage.html',
    controller: function($scope, $state) {
      stream_of_redditness_cljs.core.manageView($state.params.threads, $state.params.colors);
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');

});
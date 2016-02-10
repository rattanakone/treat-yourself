'use strict';

/**
 * @ngdoc overview
 * @name treatYourselfApp
 * @description
 * # treatYourselfApp
 *
 * Main module of the application.
 */
angular
  .module('treatYourselfApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
    // Create your app with 'youtube-embed' dependency
    //var myApp = angular.module('myApp', ['youtube-embed'])
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/looks', {
        templateUrl: 'views/looks.html',
        controller: 'LooksCtrl',
        controllerAs: 'looks'
      })
      .when('/daytime', {
        templateUrl: 'views/daytime.html',
        controller: 'DaytimeCtrl',
        controllerAs: 'daytime'
      })
      .when('/evening', {
        templateUrl: 'views/evening.html',
        controller: 'EveningCtrl',
        controllerAs: 'evening'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

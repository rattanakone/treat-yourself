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
    'ngStorage', // added to enable localStorage features
    'ngTouch',
    'ngDraggable'
    
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
      .when('/mix', {
        templateUrl: 'views/mix.html',
        controller: 'MixCtrl',
        controllerAs: 'mix'
      })
      .when('/favorite', {
        templateUrl: 'views/favorite.html',
        controller: 'FavoriteCtrl',
        controllerAs: 'favorite'
      })
      .when('/guru', {
        templateUrl: 'views/guru.html',
        controller: 'GuruCtrl',
        controllerAs: 'guru'
      })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl',
        controllerAs: 'work'
      })
      .when('/cafe', {
        templateUrl: 'views/cafe.html',
        controller: 'CafeCtrl',
        controllerAs: 'cafe'
      })
      .when('/lunch', {
        templateUrl: 'views/lunch.html',
        controller: 'LunchCtrl',
        controllerAs: 'lunch'
      })
      .when('/date', {
        templateUrl: 'views/date.html',
        controller: 'DateCtrl',
        controllerAs: 'date'
      })
      .when('/errands', {
        templateUrl: 'views/errands.html',
        controller: 'ErrandsCtrl',
        controllerAs: 'errands'
      })
      .when('/dinner', {
        templateUrl: 'views/dinner.html',
        controller: 'DinnerCtrl',
        controllerAs: 'dinner'
      })
      .when('/clubbing', {
        templateUrl: 'views/clubbing.html',
        controller: 'ClubbingCtrl',
        controllerAs: 'clubbing'
      })
      .when('/datenight', {
        templateUrl: 'views/datenight.html',
        controller: 'DatenightCtrl',
        controllerAs: 'datenight'
      })
      .when('/ladiesnight', {
        templateUrl: 'views/ladiesnight.html',
        controller: 'LadiesnightCtrl',
        controllerAs: 'ladiesnight'
      })
      .when('/parties', {
        templateUrl: 'views/parties.html',
        controller: 'PartiesCtrl',
        controllerAs: 'parties'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

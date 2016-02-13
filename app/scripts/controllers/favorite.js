'use strict';

/**
 * @ngdoc function
 * @name treatYourselfApp.controller:FavoriteCtrl
 * @description
 * # FavoriteCtrl
 * Controller of the treatYourselfApp
 */
angular.module('treatYourselfApp')
  .controller('FavoriteCtrl', function ($scope, $sce, $localStorage) {
    $scope.storage = $localStorage;
  });

'use strict';

/**
 * @ngdoc function
 * @name treatYourselfApp.controller:GuruCtrl
 * @description
 * # GuruCtrl
 * Controller of the treatYourselfApp
 */
angular.module('treatYourselfApp')
  .controller('GuruCtrl', function ($scope, guru) {
    $scope.video = guru.query();

    $scope.refreshButton = function(){
        $scope.video = guru.query({
            keywords: $scope.keywords
        });
    };

  });

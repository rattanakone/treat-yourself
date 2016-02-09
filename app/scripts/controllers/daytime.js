'use strict';

/**
 * @ngdoc function
 * @name treatYourselfApp.controller:DaytimeCtrl
 * @description
 * # DaytimeCtrl
 * Controller of the treatYourselfApp
 */
angular.module('treatYourselfApp')
  .controller('DaytimeCtrl', function ($scope, $sce) {
    $scope.videos = 'oHg5SJYRHA0';
    $scope.hairVideo = 'AR8D2yqgQ1U';
    var embedCode = '<iframe ng-if="currentVideo" width="580" height="350" src="https://www.youtube.com/embed/' + $scope.videos + '" frameborder="0" allowfullscreen></iframe>';
    $scope.currentVideo = $sce.trustAsHtml(embedCode);
    var hairCode = '<iframe ng-if="currentVideo" width="580" height="350" src="https://www.youtube.com/embed/' + $scope.hairVideo + '" frameborder="0" allowfullscreen></iframe>';
    $scope.testVideo = $sce.trustAsHtml(hairCode);
    console.log("set current video to: " + $scope.currentVideo);
  });

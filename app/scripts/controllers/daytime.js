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
    $scope.firstMakeupVideoId = '9OFpfTd0EIs';
    $scope.firstHairVideoId = 'AR8D2yqgQ1U';
    $scope.firstOutfitVideoId = 'ZZyGDiUnta4';
    var firstMakeupEmbedCode = '<iframe ng-if="currentVideo" width="580" height="350" src="https://www.youtube.com/embed/' + $scope.firstMakeupVideoId + '" frameborder="0" allowfullscreen></iframe>';
    $scope.firstMakeupVideo = $sce.trustAsHtml(firstMakeupEmbedCode);
    var firstHairEmbedCode = '<iframe ng-if="currentVideo" width="580" height="350" src="https://www.youtube.com/embed/' + $scope.firstHairVideoId + '" frameborder="0" allowfullscreen></iframe>';
    $scope.firstHairVideo = $sce.trustAsHtml(firstHairEmbedCode);
    var firstOutfitEmbedCode = '<iframe ng-if="currentVideo" width="580" height="350" src="https://www.youtube.com/embed/' + $scope.firstOutfitVideoId + '" frameborder="0" allowfullscreen></iframe>';
   	$scope.firstOutfitVideo = $sce.trustAsHtml(firstOutfitEmbedCode);

    $scope.themeOne = false;
    $scope.themeTwo = false;
    $scope.themeThree = false;
    $scope.themeFour = false;
    $scope.themeFive = false;

  });

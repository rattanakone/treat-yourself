'use strict';

/**
 * @ngdoc function
 * @name treatYourselfApp.controller:MixCtrl
 * @description
 * # MixCtrl
 * Controller of the treatYourselfApp
 */
angular.module('treatYourselfApp')
  .controller('MixCtrl', function ($scope, $sce, makeup) {

    var copyRandomMakeupIndex = 0;

    $scope.makeUpVideos = makeup.query();


    $scope.randomMakeupVideo = function () {
    	var randomMakeupIndex = Math.floor(Math.random()*50) +1;
    	var embedMakeupCode = '<iframe ng-if="makeupVideoEmbed" width="580" height="350" src="https://www.youtube.com/embed/' + $scope.makeUpVideos.items[randomMakeupIndex].snippet.resourceId.videoId + '" frameborder="0" allowfullscreen></iframe>'; 
    	$scope.makeupVideoEmbed = $sce.trustAsHtml(embedMakeupCode); 
        console.log("set current video to: " + $scope.makeupVideoEmbed); 
        console.log($scope.makeUpVideos.items[randomMakeupIndex].snippet.resourceId.videoId);
        copyRandomMakeupIndex = randomMakeupIndex;
    };


  });

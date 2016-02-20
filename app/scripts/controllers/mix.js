'use strict';

/**
 * @ngdoc function
 * @name treatYourselfApp.controller:MixCtrl
 * @description
 * # MixCtrl
 * Controller of the treatYourselfApp
 */
angular.module('treatYourselfApp')
  .controller('MixCtrl', function ($scope, $sce, makeup, hair, outfit) {

    var copyRandomIndex = 0;

    $scope.makeUpVideos = makeup.query();

    $scope.hairVideos = hair.query();

    $scope.outfitVideos = outfit.query();


    $scope.randomMakeupVideo = function () {
    	var randomMakeupIndex = Math.floor(Math.random()*50) +1;
    	var embedMakeupCode = '<iframe ng-if="makeupVideoEmbed" width="580" height="350" src="https://www.youtube.com/embed/' + $scope.makeUpVideos.items[randomMakeupIndex].snippet.resourceId.videoId + '" frameborder="0" allowfullscreen></iframe>'; 
    	$scope.makeupVideoEmbed = $sce.trustAsHtml(embedMakeupCode); 
        console.log("set current video to: " + $scope.makeupVideoEmbed); 
        console.log($scope.makeUpVideos.items[randomMakeupIndex].snippet.resourceId.videoId);
        copyRandomIndex = randomMakeupIndex;
    };

    $scope.randomHairVideo = function () {
        var randomHairIndex = Math.floor(Math.random()*50) +1;
        var embedHairCode = '<iframe ng-if="hairVideoEmbed" width="580" height="350" src="https://www.youtube.com/embed/' + $scope.hairVideos.items[randomHairIndex].snippet.resourceId.videoId + '" frameborder="0" allowfullscreen></iframe>'; 
        $scope.hairVideoEmbed = $sce.trustAsHtml(embedHairCode); 
        console.log("set current video to: " + $scope.hairVideoEmbed); 
        console.log($scope.hairVideos.items[randomHairIndex].snippet.resourceId.videoId);
        copyRandomIndex = randomHairIndex;
    };

    $scope.randomOutfitVideo = function () {
        var randomOutfitIndex = Math.floor(Math.random()*50) +1;
        var embedOutfitCode = '<iframe ng-if="outfitVideoEmbed" width="580" height="350" src="https://www.youtube.com/embed/' + $scope.outfitVideos.items[randomOutfitIndex].snippet.resourceId.videoId + '" frameborder="0" allowfullscreen></iframe>'; 
        $scope.outfitVideoEmbed = $sce.trustAsHtml(embedOutfitCode); 
        console.log("set current video to: " + $scope.outfitVideoEmbed);
        console.log($scope.outfitVideos.items[randomOutfitIndex.snippet.resourceId.videoId]);
        copyRandomIndex = randomOutfitIndex;
    };

    


  });

'use strict';

/**
 * @ngdoc function
 * @name treatYourselfApp.controller:DaytimeCtrl
 * @description
 * # DaytimeCtrl
 * Controller of the treatYourselfApp
 */
angular.module('treatYourselfApp')
  .controller('DaytimeCtrl', function ($scope) {

     // $scope.firstMakeupVideoId = '9OFpfTd0EIs';
     // $scope.firstHairVideoId = 'AR8D2yqgQ1U';
     // $scope.firstOutfitVideoId = 'ZZyGDiUnta4';

     // $scope.secondMakeupVideoId = 'p3j2NYZ8FKs';
     // $scope.secondHairVideoId = 'zpOULjyy-n8';
     // $scope.secondOutfitVideoId = 'J9gKyRmic20';

    // $scope.thirdMakeupVideoId = 'ST86JM1RPl0';
    // $scope.thirdHairVideoId = 'ccenFp_3kq8';
    // $scope.thirdOutfitVideoId = 'cX-8MHKuQ5I';

    // $scope.fourthMakeupVideoId = 'FTQbiNvZqaY';
    // $scope.fourthHairVideoId = 'yyZU4iNRdsM';
    // $scope.fourthOutfitVideoId = 'E8gmARGvPlI';

    // $scope.fifthMakeupVideoId = 'rrJky8YuTr4';
    // $scope.fifthHairVideoId = 'MQSkIFhuli0';
    // $scope.fifthOutfitVideoId = 'AR8D2yqgQ1U';

    
     // var firstMakeupEmbedCode = '<iframe width="580" height="350" src="https://www.youtube.com/embed/' + $scope.firstMakeupVideoId + '" frameborder="0" allowfullscreen></iframe>';
     // $scope.firstMakeupVideo = $sce.trustAsHtml(firstMakeupEmbedCode);
     // var firstHairEmbedCode = '<iframe width="580" height="350" src="https://www.youtube.com/embed/' + $scope.firstHairVideoId + '" frameborder="0" allowfullscreen></iframe>';
     // $scope.firstHairVideo = $sce.trustAsHtml(firstHairEmbedCode);
     // var firstOutfitEmbedCode = '<iframe width="580" height="350" src="https://www.youtube.com/embed/' + $scope.firstOutfitVideoId + '" frameborder="0" allowfullscreen></iframe>';
   	 // $scope.firstOutfitVideo = $sce.trustAsHtml(firstOutfitEmbedCode);

     // var secondMakeupEmbedCode = '<iframe width="580" height="350" src="https://www.youtube.com/embed/' + $scope.secondMakeupVideoId + '" frameborder="0" allowfullscreen></iframe>';
     // $scope.secondMakeupVideo = $sce.trustAsHtml(secondMakeupEmbedCode); 
     // var secondHairEmbedCode = '<iframe width="580" height="350" src="https://www.youtube.com/embed/' + $scope.secondHairVideoId + '" frameborder="0" allowfullscreen></iframe>';
     // $scope.secondHairVideo = $sce.trustAsHtml(secondHairEmbedCode); 
     // var secondOutfitEmbedCode = '<iframe width="580" height="350" src="https://www.youtube.com/embed/' + $scope.secondOutfitVideoId + '" frameborder="0" allowfullscreen></iframe>';
     // $scope.secondOutfitVideo = $sce.trustAsHtml(secondOutfitEmbedCode); 

    // var thirdMakeupEmbedCode = '<iframe width="580" height="350" src="https://www.youtube.com/embed/' + $scope.thirdMakeupVideoId + '" frameborder="0" allowfullscreen></iframe>';
    // $scope.thirdMakeupVideo = $sce.trustAsHtml(thirdMakeupEmbedCode); 
    // var thirdHairEmbedCode = '<iframe width="580" height="350" src="https://www.youtube.com/embed/' + $scope.thirdHairVideoId + '" frameborder="0" allowfullscreen></iframe>';
    // $scope.thirdHairVideo = $sce.trustAsHtml(thirdHairEmbedCode); 
    // var thirdOutfitEmbedCode = '<iframe width="580" height="350" src="https://www.youtube.com/embed/' + $scope.thirdOutfitVideoId + '" frameborder="0" allowfullscreen></iframe>';
    // $scope.thirdOutfitVideo = $sce.trustAsHtml(thirdOutfitEmbedCode); 

    // var fourthMakeupEmbedCode = '<iframe width="580" height="350" src="https://www.youtube.com/embed/' + $scope.fourthMakeupVideoId + '" frameborder="0" allowfullscreen></iframe>';
    // $scope.fourthMakeupVideo = $sce.trustAsHtml(fourthMakeupEmbedCode); 
    // var fourthHairEmbedCode = '<iframe width="580" height="350" src="https://www.youtube.com/embed/' + $scope.fourthHairVideoId + '" frameborder="0" allowfullscreen></iframe>';
    // $scope.fourthHairVideo = $sce.trustAsHtml(fourthHairEmbedCode); 
    // var fourthOutfitEmbedCode = '<iframe width="580" height="350" src="https://www.youtube.com/embed/' + $scope.fourthOutfitVideoId + '" frameborder="0" allowfullscreen></iframe>';
    // $scope.fourthOutfitVideo = $sce.trustAsHtml(fourthOutfitEmbedCode); 

    // var fifthMakeupEmbedCode = '<iframe width="580" height="350" src="https://www.youtube.com/embed/' + $scope.fifthMakeupVideoId + '" frameborder="0" allowfullscreen></iframe>';
    // $scope.fifthMakeupVideo = $sce.trustAsHtml(fifthMakeupEmbedCode); 
    // var fifthHairEmbedCode = '<iframe width="580" height="350" src="https://www.youtube.com/embed/' + $scope.fifthHairVideoId + '" frameborder="0" allowfullscreen></iframe>';
    // $scope.fifthHairVideo = $sce.trustAsHtml(fifthHairEmbedCode); 
    // var fifthOutfitEmbedCode = '<iframe width="580" height="350" src="https://www.youtube.com/embed/' + $scope.fifthOutfitVideoId + '" frameborder="0" allowfullscreen></iframe>';
    // $scope.fifthOutfitVideo = $sce.trustAsHtml(fifthOutfitEmbedCode); 

    $scope.themeOne = false;
    $scope.themeTwo = false;
    $scope.themeThree = false;
    $scope.themeFour = false;
    $scope.themeFive = false;


//     $scope.saveVideos = function(){
        
//     var videoData = {
//     'first' : $scope.firstMakeupVideoId,
//     'second' : $scope.firstHairVideoId,
//     'third' : $scope.firstOutfitVideoId

//   };
  
//   if (!$localStorage.savedVideos){
//         $localStorage.savedVideos = [videoData];
//         // displays message when first video is saved for the first time
//          $scope.videoSaved = {
//                 'success': true
//             };
//           // 2 seconds loading delay for success when first video is saved
//             $timeout(function() {

//               // show message for 3 more seconds for success when first video is saved
//               $timeout(function() {
//                 $scope.videoSaved = false;
//               }, 3000);
//             }, 2000);
//     } else {
//         // We have already saved some videos. 
//         // Check to make sure we haven't already saved the current video.
//         var save = true; // Initialize the save decision variable.
//         // Use this loop to check if we've already saved the video.
//         for (var i=0; i < $localStorage.savedVideos.length; i++){
//             if ($localStorage.savedVideos[i].first === videoData.first) {
//                 // This is a duplicate, so don't save (variable set to false).
//                 save = false;
//             }
//         }
//         if (save===true){
//             $localStorage.savedVideos.push(videoData);
//             // Add object to trigger messages
//             $scope.videoSaved = {
//                 'success': true
//             };

//             // 2 seconds loading delay for success
//             $timeout(function() {

//               // show message for 3 more seconds for success
//               $timeout(function() {
//                 $scope.videoSaved = false;
//               }, 3000);
//             }, 2000);

//         } else {
//             console.log('video already saved');
//             // Add object to trigger messages
//             $scope.videoSaved = {
//                 'duplicate': true
//             };

//             // 2 seconds loading delay for duplicate
//             $timeout(function() {

//               // show message for 3 more seconds for duplicate 
//               $timeout(function() {
//                 $scope.videoSaved = false;
//               }, 3000);
//             }, 2000);
//         }
//     }
// };

  });

'use strict';

/**
 * @ngdoc service
 * @name treatYourselfApp.makeup
 * @description
 * # makeup
 * Factory in the treatYourselfApp.
 */
angular.module('treatYourselfApp')
  .factory('makeup', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLATkQeyUmMO0w3T12ar2-ISgq3J5cJojK&key=AIzaSyDZqbprMDMRgEyeJV3ink9cCfqzwpvs8xY', {}, {
      query: {
        method:'GET',
        params:{
        },
        isArray:false
      }
    });
   
  });
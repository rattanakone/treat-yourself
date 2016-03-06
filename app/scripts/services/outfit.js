'use strict';

/**
 * @ngdoc service
 * @name treatYourselfApp.outfit
 * @description
 * # outfit
 * Factory in the treatYourselfApp.
 */
angular.module('treatYourselfApp')
  .factory('outfit', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLATkQeyUmMO3zjv0hF1DWE8ND5qF0JiCh&key=AIzaSyDZqbprMDMRgEyeJV3ink9cCfqzwpvs8xY', {}, {
      query: {
        method:'GET',
        params:{
        },
        isArray:false
      }
    });
   
  });

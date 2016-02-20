'use strict';

/**
 * @ngdoc service
 * @name treatYourselfApp.hair
 * @description
 * # hair
 * Factory in the treatYourselfApp.
 */
angular.module('treatYourselfApp')
  .factory('hair', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLATkQeyUmMO00P7vmYo6E1mzE24S463CP&key=AIzaSyDZqbprMDMRgEyeJV3ink9cCfqzwpvs8xY', {}, {
      query: {
        method:'GET',
        params:{
        },
        isArray:false
      }
    });
   
  });

'use strict';

/**
 * @ngdoc service
 * @name treatYourselfApp.guru
 * @description
 * # guru
 * Factory in the treatYourselfApp.
 */
angular.module('treatYourselfApp')
  .factory('guru', function ($resource) {
    // Service logic
    // ...

     // Public API here
    return $resource('https://www.googleapis.com/youtube/v3/search?part=snippet&q=:keywords&type=video&maxResults=50&channelId=UCuYx81nzzz4OFQrhbKDzTng&order=date&key=AIzaSyDZqbprMDMRgEyeJV3ink9cCfqzwpvs8xY', {}, {
      query: {
        method:'GET',
        params:{
        },
        isArray:false
      }
    });
  });

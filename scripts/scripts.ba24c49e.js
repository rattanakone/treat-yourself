"use strict";angular.module("treatYourselfApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch","ngDraggable"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/looks",{templateUrl:"views/looks.html",controller:"LooksCtrl",controllerAs:"looks"}).when("/daytime",{templateUrl:"views/daytime.html",controller:"DaytimeCtrl",controllerAs:"daytime"}).when("/evening",{templateUrl:"views/evening.html",controller:"EveningCtrl",controllerAs:"evening"}).when("/mix",{templateUrl:"views/mix.html",controller:"MixCtrl",controllerAs:"mix"}).when("/favorite",{templateUrl:"views/favorite.html",controller:"FavoriteCtrl",controllerAs:"favorite"}).when("/guru",{templateUrl:"views/guru.html",controller:"GuruCtrl",controllerAs:"guru"}).otherwise({redirectTo:"/"})}]),angular.module("treatYourselfApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("treatYourselfApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("treatYourselfApp").controller("LooksCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("treatYourselfApp").controller("DaytimeCtrl",["$scope",function(a){a.themeOne=!1,a.themeTwo=!1,a.themeThree=!1,a.themeFour=!1,a.themeFive=!1}]),angular.module("treatYourselfApp").controller("EveningCtrl",["$scope",function(a){a.themeOne=!1,a.themeTwo=!1,a.themeThree=!1,a.themeFour=!1,a.themeFive=!1}]),angular.module("treatYourselfApp").controller("MixCtrl",["$scope","$sce","makeup","hair","outfit",function(a,b,c,d,e){var f=0;a.makeUpVideos=c.query(),a.hairVideos=d.query(),a.outfitVideos=e.query(),a.randomMakeupVideo=function(){var c=Math.floor(50*Math.random())+1,d='<iframe ng-if="makeupVideoEmbed" width="580" height="350" src="https://www.youtube.com/embed/'+a.makeUpVideos.items[c].snippet.resourceId.videoId+'" frameborder="0" allowfullscreen></iframe>';a.makeupVideoEmbed=b.trustAsHtml(d),console.log("set current video to: "+a.makeupVideoEmbed),console.log(a.makeUpVideos.items[c].snippet.resourceId.videoId),f=c},a.randomHairVideo=function(){var c=Math.floor(50*Math.random())+1,d='<iframe ng-if="hairVideoEmbed" width="580" height="350" src="https://www.youtube.com/embed/'+a.hairVideos.items[c].snippet.resourceId.videoId+'" frameborder="0" allowfullscreen></iframe>';a.hairVideoEmbed=b.trustAsHtml(d),console.log("set current video to: "+a.hairVideoEmbed),console.log(a.hairVideos.items[c].snippet.resourceId.videoId),f=c},a.randomOutfitVideo=function(){var c=Math.floor(50*Math.random())+1,d='<iframe ng-if="outfitVideoEmbed" width="580" height="350" src="https://www.youtube.com/embed/'+a.outfitVideos.items[c].snippet.resourceId.videoId+'" frameborder="0" allowfullscreen></iframe>';a.outfitVideoEmbed=b.trustAsHtml(d),console.log("set current video to: "+a.outfitVideoEmbed),console.log(a.outfitVideos.items[c.snippet.resourceId.videoId]),f=c}}]),angular.module("treatYourselfApp").controller("FavoriteCtrl",["$scope","$sce","$localStorage",function(a,b,c){a.storage=c}]),angular.module("treatYourselfApp").controller("GuruCtrl",["$scope","guru",function(a,b){a.video=b.query(),a.refreshButton=function(){a.video=b.query({keywords:a.keywords})}}]),angular.module("treatYourselfApp").factory("guru",["$resource",function(a){return a("https://www.googleapis.com/youtube/v3/search?part=snippet&q=:keywords&type=video&maxResults=50&channelId=UCuYx81nzzz4OFQrhbKDzTng&order=date&key=AIzaSyDZqbprMDMRgEyeJV3ink9cCfqzwpvs8xY",{},{query:{method:"GET",params:{},isArray:!1}})}]),angular.module("treatYourselfApp").factory("makeup",["$resource",function(a){return a("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLATkQeyUmMO0w3T12ar2-ISgq3J5cJojK&key=AIzaSyDZqbprMDMRgEyeJV3ink9cCfqzwpvs8xY",{},{query:{method:"GET",params:{},isArray:!1}})}]),angular.module("treatYourselfApp").factory("hair",["$resource",function(a){return a("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLATkQeyUmMO00P7vmYo6E1mzE24S463CP&key=AIzaSyDZqbprMDMRgEyeJV3ink9cCfqzwpvs8xY",{},{query:{method:"GET",params:{},isArray:!1}})}]),angular.module("treatYourselfApp").factory("outfit",["$resource",function(a){return a("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLB1FC53D6063660EF&key=AIzaSyDZqbprMDMRgEyeJV3ink9cCfqzwpvs8xY",{},{query:{method:"GET",params:{},isArray:!1}})}]),angular.module("treatYourselfApp").run(["$templateCache",function(a){a.put("views/about.html",'<!-- Add your site or application content here --> <div class="header"> <div class="navbar navbar-default" id="my-nav" role="navigation"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#/"></a> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse"> <ul class="nav navbar-nav nav-justified"> <li><a href="#/" class="btn btn-default btn-lg" id="link-button">link</a></li> <li><a ng-href="#/about" class="btn btn-default btn-lg" id="link-button">link</a></li> <li><a ng-href="#/" class="btn btn-default btn-lg" id="link-button">link</a></li> <li><a ng-href="#/" class="btn btn-default btn-lg" id="link-button">link</a></li> </ul> </div> </div> </div> </div> <p>This is the about view.</p> <div class="wow bounceInUp"> Content to Reveal Here </div>'),a.put("views/daytime.html",'<div> <div class="row"> <div class="col-sm-12 text-center"> <p class="daytime-text"> DAYTIME </p> </div> </div> </div> <br> <br> <br> <br> <div class="row work-image"> <div class="col-lg-12 text-center"> <div class="space-daytime"> <div ng-show="themeOne" class="fadein fadeout"> <div class="row"> <br> <br> <div class="col-md-4 text-center"> <p class="btn btn-default" id="video-label-daytime"> MAKEUP </p> <br> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/9OFpfTd0EIs" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="firstMakeupVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="btn btn-default" id="video-label-daytime"> HAIR </p> <br> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/AR8D2yqgQ1U" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="firstHairVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="btn btn-default" id="video-label-daytime"> OUTFIT </p> <br> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/ZZyGDiUnta4" frameborder="0" allowfullscreen></iframe> <!-- <div ng-bind-html="firstOutfitVideo"></div> --> </div> </div> </div> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeOne = !themeOne" class="btn btn-default" id="hide-button">HIDE</a> </div> </div> </div> <br> <div class="row"> <div class="col-md-6"> <p class="work-look-title"> </p> </div> <div class="col-md-6"> <p class="work-look-title"> Work<i>LOOK</i> </p> </div> </div> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeOne = !themeOne" class="btn btn-default" id="theme-button"> VIEW</a> </div> </div> <br> </div> </div> </div> <br> <br> <br> <br> <br> <br> <br> <br> <div ng-show="themeTwo" class="fadein fadeout"> <div class="row"> <div class="col-md-4 text-center"> <p class="video-labels"> makeup </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/p3j2NYZ8FKs" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="secondMakeupVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> hair </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/zpOULjyy-n8" frameborder="0" allowfullscreen></iframe> <!-- <div ng-bind-html="secondHairVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> outfit </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/J9gKyRmic20" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="secondOutfitVideo"></div> --> </div> </div> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeTwo = !themeTwo" class="btn btn-default" id="hide-button">hide look</a> </div> </div> <br> <br> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeTwo = !themeTwo" class="btn btn-default" id="theme-button">cafe</a> </div> </div> <br> <br> <br> <br> <div ng-show="themeThree" class="fadein fadeout"> <div class="row"> <div class="col-md-4 text-center"> <p class="video-labels"> makeup </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/ST86JM1RPl0" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="thirdMakeupVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> hair </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/ccenFp_3kq8" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="thirdHairVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> outfit </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/cX-8MHKuQ5I" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="thirdOutfitVideo"></div> --> </div> </div> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeThree = !themeThree" class="btn btn-default" id="hide-button">hide look</a> </div> </div> <br> <br> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeThree = !themeThree" class="btn btn-default" id="theme-button">lunch</a> </div> </div> <br> <br> <br> <br> <div ng-show="themeFour" class="fadein fadeout"> <div class="row"> <div class="col-md-4 text-center"> <p class="video-labels"> makeup </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/FTQbiNvZqaY" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="fourthMakeupVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> hair </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/yyZU4iNRdsM" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="fourthHairVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> outfit </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="560" height="315" src="https://www.youtube.com/embed/E8gmARGvPlI" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="fourthOutfitVideo"></div> --> </div> </div> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeFour = !themeFour" class="btn btn-default" id="hide-button">hide look</a> </div> </div> <br> <br> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeFour = !themeFour" class="btn btn-default" id="theme-button">date</a> </div> </div> <br> <br> <br> <br> <div ng-show="themeFive" class="fadein fadeout"> <div class="row"> <div class="col-md-4 text-center"> <p class="video-labels"> makeup </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/rrJky8YuTr4" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="fifthMakeupVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> hair </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/MQSkIFhuli0" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="fifthHairVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> outfit </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/AR8D2yqgQ1U" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="fifthOutfitVideo"></div> --> </div> </div> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeFive = !themeFive" class="btn btn-default" id="hide-button">hide look</a> </div> </div> <br> <br> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeFive = !themeFive" class="btn btn-default" id="theme-button">errands</a> </div> </div> <br> <br> <br> <br> <br> <br>'),a.put("views/evening.html",'<!-- Add your site or application content here \n	<div class="header">\n      <div class="navbar navbar-default" id="my-nav" role="navigation">\n        <div class="container">\n          <div class="navbar-header">\n\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse">\n              <span class="sr-only">Toggle navigation</span>\n              <span class="icon-bar"></span>\n              <span class="icon-bar"></span>\n              <span class="icon-bar"></span>\n            </button>\n\n            \n          </div>\n\n          <div class="collapse navbar-collapse" id="js-navbar-collapse">\n\n            <ul class="nav navbar-nav nav-justified">\n              <li><a href="/treat-yourself/#/" class="btn btn-default btn-lg" id="link-button">home</a></li>\n              <li><a ng-href="/treat-yourself/#/looks" class="btn btn-default btn-lg" id="link-button">looks</a></li>\n              <li><a ng-href="/treat-yourself/#/guru" class="btn btn-default btn-lg" id="link-button">beauty guru</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div> --> <div class="container"> <div class="row"> <div class="col-lg-12 text-center"> <p class="evening-text"> evening looks </p> </div> </div> </div> <br> <br> <br> <br> <div ng-show="themeOne"> <div class="row"> <div class="col-md-4 text-center"> <p class="video-labels"> makeup </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/9OFpfTd0EIs" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="firstMakeupVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> hair </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/AR8D2yqgQ1U" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="firstHairVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> outfit </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="560" height="315" src="https://www.youtube.com/embed/ZZyGDiUnta4" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="firstOutfitVideo"></div> --> </div> </div> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeOne = !themeOne" class="btn btn-default" id="hide-button">hide look</a> </div> </div> <br> <br> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeOne = !themeOne" class="btn btn-default" id="theme-button">dinner</a> </div> </div> <br> <br> <br> <br> <div ng-show="themeTwo"> <div class="row"> <div class="col-md-4 text-center"> <p class="video-labels"> makeup </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/p3j2NYZ8FKs" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="secondMakeupVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> hair </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/zpOULjyy-n8" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="secondHairVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> outfit </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/J9gKyRmic20" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="secondOutfitVideo"></div> --> </div> </div> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeTwo = !themeTwo" class="btn btn-default" id="hide-button">hide look</a> </div> </div> <br> <br> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeTwo = !themeTwo" class="btn btn-default" id="theme-button">theater</a> </div> </div> <br> <br> <br> <br> <div ng-show="themeThree"> <div class="row"> <div class="col-md-4 text-center"> <p class="video-labels"> makeup </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/ST86JM1RPl0" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="thirdMakeupVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> hair </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/ccenFp_3kq8" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="thirdHairVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> outfit </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/cX-8MHKuQ5I" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="thirdOutfitVideo"></div> --> </div> </div> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeThree = !themeThree" class="btn btn-default" id="hide-button">hide look</a> </div> </div> <br> <br> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeThree = !themeThree" class="btn btn-default" id="theme-button">date</a> </div> </div> <br> <br> <br> <br> <div ng-show="themeFour"> <div class="row"> <div class="col-md-4 text-center"> <p class="video-labels"> makeup </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/FTQbiNvZqaY" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="fourthMakeupVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> hair </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/yyZU4iNRdsM" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="fourthHairVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> outfit </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="560" height="315" src="https://www.youtube.com/embed/E8gmARGvPlI" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="fourthOutfitVideo"></div> --> </div> </div> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeFour = !themeFour" class="btn btn-default" id="hide-button">hide look</a> </div> </div> <br> <br> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeFour = !themeFour" class="btn btn-default" id="theme-button">ladies night</a> </div> </div> <br> <br> <br> <br> <div ng-show="themeFive"> <div class="row"> <div class="col-md-4 text-center"> <p class="video-labels"> makeup </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/rrJky8YuTr4" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="fifthMakeupVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> hair </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/MQSkIFhuli0" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="fifthHairVideo"></div> --> </div> </div> <div class="col-md-4 text-center"> <p class="video-labels"> outfit </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <iframe width="420" height="315" src="https://www.youtube.com/embed/AR8D2yqgQ1U" frameborder="0" allowfullscreen></iframe> <!--<div ng-bind-html="fifthOutfitVideo"></div> --> </div> </div> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeFive = !themeFive" class="btn btn-default" id="hide-button">hide look</a> </div> </div> <br> <br> </div> <br> <br> <div class="row"> <div class="col-lg-12 text-center"> <a href ng-click="themeFive = !themeFive" class="btn btn-default" id="theme-button">parties</a> </div> </div> <br> <br> <br> <br> <br> <br>'),a.put("views/favorite.html",'<!-- Add your site or application content here --> <div class="header"> <div class="navbar navbar-default" id="my-nav" role="navigation"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#/"></a> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse"> <ul class="nav navbar-nav nav-justified"> <li><a href="/treat-yourself/#/" class="btn btn-default btn-lg" id="link-button">home</a></li> <li><a ng-href="/treat-yourself/#/" class="btn btn-default btn-lg" id="link-button">looks</a></li> <li><a ng-href="/treat-yourself/#/" class="btn btn-default btn-lg" id="link-button">favorites</a></li> <li><a ng-href="/treat-yourself/#/" class="btn btn-default btn-lg" id="link-button">beauty guru</a></li> </ul> </div> </div> </div> </div> <div ng-if="storage.savedVideos"> <ul class="saved-videos-list"> <li ng-repeat="video in storage.savedVideos"> <iframe width="580" height="350" ng-src="https://www.youtube.com/embed/{{first}}" frameborder="0" allowfullscreen> </iframe> </li> </ul> </div>'),a.put("views/guru.html",'<!-- Add your site or application content here --> <div class="header"> <div class="navbar navbar-default" id="my-nav" role="navigation"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse"> <ul class="nav navbar-nav nav-justified"> <li><a href="/treat-yourself/#/" class="btn btn-default btn-lg" id="link-button">home</a></li> <li><a ng-href="/treat-yourself/#/looks" class="btn btn-default btn-lg" id="link-button">looks</a></li> <li><a ng-href="/treat-yourself/#/guru" class="btn btn-default btn-lg" id="link-button">beauty guru</a></li> </ul> </div> </div> </div> </div> <div class="container"> <div class="row"> <div class="col-lg-12 text-center"> <p class="guru-text"> my favorite beauty guru: </p> </div> </div> </div> <br> <div class="container"> <div class="row"> <div class="col-lg-12 text-center"> <p class="guru-two-text"> Michelle Phan </p> <div class="embed-responsive embed-responsive-16by9"> <iframe width="560" height="315" src="https://www.youtube.com/embed/_IQkhuUx4w4?autoplay=1&loop=1&showinfo=0&list=PLATkQeyUmMO3ZxlvxJRYWlTIpL2tUidd3" frameborder="0" allowfullscreen></iframe> </div> </div> </div> </div> <br> <div class="container"> <div class="row"> <div class="col-sm-12 col-md-12 col-lg-12 text-center"> <a href="http://michellephan.com/" class="btn btn-default btn-lg" id="website-button" target="_blank">Michelle\'s website</a> </div> </div> <br> <br> </div> <br> <br> <br> <br> <br> <br> <br> <br> <br> <section class="bg-black"> <div ng-controller="GuruCtrl"> <div class="container"> <div class="row"> <div class="col-lg-12 text-center"> <p class="search-text"> discover more of Michelle\'s videos </p> </div> <div class="col-lg-12 text-center"> <div class="input-group"> <input type="text" class="form-control" placeholder="search for keywords" id="search-box-colors" name="keywords" ng-model="keywords"> <span class="input-group-btn"> <button class="btn btn-default" id="search-button-colors" type="button" ng-click="refreshButton()"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button> </span> </div><!-- /input-group --> </div><!-- /.col-lg-6 --> </div> </div> <br> <br> <br> <br> <br> <div class="row"> <div class="col-sm-4 col-md-4 col-lg-4 text-center" id="no-link"> <a ng-href="https://www.youtube.com/embed/{{video.items[0].id.videoId}}" target="_blank"> <img width="300" height="220" ng-src="{{video.items[0].snippet.thumbnails.high.url}}"><br> <p class="title-font">{{video.items[0].snippet.title}}</p></a> </div> <div class="col-sm-4 col-md-4 col-lg-4 text-center" id="no-link"> <a ng-href="https://www.youtube.com/embed/{{video.items[1].id.videoId}}" target="_blank"> <img width="300" height="220" ng-src="{{video.items[1].snippet.thumbnails.high.url}}"><br> <p class="title-font">{{video.items[1].snippet.title}}</p></a> </div> <div class="col-sm-4 col-md-4 col-lg-4 text-center" id="no-link"> <a ng-href="https://www.youtube.com/embed/{{video.items[2].id.videoId}}" target="_blank"> <img width="300" height="220" ng-src="{{video.items[2].snippet.thumbnails.high.url}}"><br> <p class="title-font">{{video.items[2].snippet.title}}</p></a> </div> </div> <br> <div class="row"> <div class="col-sm-4 col-md-4 col-lg-4 text-center" id="no-link"> <a ng-href="https://www.youtube.com/embed/{{video.items[3].id.videoId}}" target="_blank"> <img width="300" height="220" ng-src="{{video.items[3].snippet.thumbnails.high.url}}"><br> <p class="title-font">{{video.items[3].snippet.title}}</p></a> </div> <div class="col-sm-4 col-md-4 col-lg-4 text-center" id="no-link"> <a ng-href="https://www.youtube.com/embed/{{video.items[4].id.videoId}}" target="_blank"> <img width="300" height="220" ng-src="{{video.items[4].snippet.thumbnails.high.url}}"><br> <p class="title-font">{{video.items[4].snippet.title}}</p></a> </div> <div class="col-sm-4 col-md-4 col-lg-4 text-center" id="no-link"> <a ng-href="https://www.youtube.com/embed/{{video.items[5].id.videoId}}" target="_blank"> <img width="300" height="220" ng-src="{{video.items[5].snippet.thumbnails.high.url}}"><br> <p class="title-font">{{video.items[5].snippet.title}}</p></a> </div> </div> </div> <br> <br> </section>'),a.put("views/looks.html",'<!-- Add your site or application content here --> <div class="header"> <div class="navbar navbar-default" id="looks-nav" role="navigation"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" id="looks-icon" data-toggle="collapse" data-target="#js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse"> <ul class="nav navbar-nav nav-justified"> <li><a href="/treat-yourself/#/" class="btn btn-default btn-lg" id="link-button">home</a></li> <li><a ng-href="/treat-yourself/#/looks" class="btn btn-default btn-lg" id="link-button">lookbooks</a></li> <li><a ng-href="/treat-yourself/#/guru" class="btn btn-default btn-lg" id="link-button">beauty guru</a></li> </ul> </div> </div> </div> </div> <div class="row"> <div class="col-lg-12 text-center lookbook-title"> BeautyLOOKBOOKS </div> </div> <br> <br> <div class="row"> <div class="col-md-4 daytime-looks"> <div class="space-looks"> <a ng-href="/treat-yourself/#/daytime" class="btn btn-default btn-lg lookbook-buttons">DAYTIME</a> </div> </div> <div class="col-md-4 evening-looks"> <div class="space-looks"> <a ng-href="/treat-yourself/#/evening" class="btn btn-default btn-lg lookbook-buttons">EVENING</a> </div> </div> <div class="col-md-4 mix-looks"> <div class="space-looks"> <a ng-href="/treat-yourself/#/mix" class="btn btn-default btn-lg lookbook-buttons">MIX IT UP</a> </div> </div> </div> <div class="row"> <div class="col-lg-12 text-center question-title"> "What <i>LOOK</i> are You Looking for?" </div> </div>'),a.put("views/main.html",'<div class="main-models"> <!-- Add your site or application content here --> <div class="header"> <div class="navbar navbar-default" id="main-nav" role="navigation"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse"> <ul class="nav navbar-nav nav-justified"> <li><a href="/treat-yourself/#/" class="btn btn-default btn-lg" id="link-button">home</a></li> <li><a ng-href="/treat-yourself/#/looks" class="btn btn-default btn-lg" id="link-button">lookbooks</a></li> <li><a ng-href="/treat-yourself/#/guru" class="btn btn-default btn-lg" id="link-button">beauty guru</a></li> </ul> </div> </div> </div> </div> <div class="intro-text"> <div class="intro-lead-in">BeautyLOOKBOOK <hr class="title"> <p class="bottom-main-title">The Place to Discover New Beautiful Looks for you</p> <a ng-href="/treat-yourself/#/looks" class="btn btn-default btn-lg start-button">CONTINUE</a> </div> </div> </div>'),a.put("views/mix.html",'<!-- Add your site or application content here \n	<div class="header">\n      <div class="navbar navbar-default" id="my-nav" role="navigation">\n        <div class="container">\n          <div class="navbar-header">\n\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse">\n              <span class="sr-only">Toggle navigation</span>\n              <span class="icon-bar"></span>\n              <span class="icon-bar"></span>\n              <span class="icon-bar"></span>\n            </button>\n\n            \n          </div>\n\n          <div class="collapse navbar-collapse" id="js-navbar-collapse">\n\n            <ul class="nav navbar-nav nav-justified">\n              <li><a href="/treat-yourself/#/" class="btn btn-default btn-lg" id="link-button">home</a></li>\n              <li><a ng-href="/treat-yourself/#/looks" class="btn btn-default btn-lg" id="link-button">looks</a></li>\n              <li><a ng-href="/treat-yourself/#/guru" class="btn btn-default btn-lg" id="link-button">beauty guru</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div> --> <div class="container"> <div class="row"> <div class="col-lg-12 text-center"> <p class="mix-text"> mix it up looks </p> </div> </div> </div> <br> <br> <br> <div class="row"> <div class="col-md-4 text-center"> <p class="video-labels" ng-click="randomMakeupVideo()"> makeup </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <center> <br> <br> <p class="question-mark"> ? </p> </center> <div ng-bind-html="makeupVideoEmbed"></div> </div> <a class="btn btn-default" id="shuffle-button" ng-click="randomMakeupVideo()">shuffle</a> <br> <br> <br> </div> <div class="col-md-4 text-center"> <p class="video-labels" ng-click="randomHairVideo()"> hair </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <center> <br> <br> <p class="question-mark"> ? </p> </center> <div ng-bind-html="hairVideoEmbed"></div> </div> <a class="btn btn-default" id="shuffle-button" ng-click="randomHairVideo()">shuffle</a> <br> <br> <br> </div> <div class="col-md-4 text-center"> <p class="video-labels" ng-click="randomOutfitVideo()"> outfit </p> <div class="embed-responsive embed-responsive-4by3" id="video-border"> <center> <br> <br> <p class="question-mark"> ? </p> </center> <div ng-bind-html="outfitVideoEmbed"></div> </div> <a class="btn btn-default" id="shuffle-button" ng-click="randomOutfitVideo()">shuffle</a> <br> <br> <br> </div> </div> <br>');
}]);
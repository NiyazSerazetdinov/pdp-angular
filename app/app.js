'use strict';

angular
  .module('pdpAngular', ['ngRoute', 'Articles', 'Comments'])
  .constant('API_ROOT_URL', 'http://pdp-angular-api.herokuapp.com')
  .config(['$routeProvider', RouteProvider]);

angular.module('Articles', []);
angular.module('Comments', []);

function RouteProvider($routeProvider) {
  $routeProvider
    .when('/articles', {
      templateUrl: 'articles/index.html',
      controller: 'ArticlesIndexController'
    }).when('/articles/new', {
      templateUrl: 'articles/new.html',
      controller: 'ArticlesNewController'
    }).when('/articles/:articleId', {
      templateUrl: 'articles/show.html',
      controller: 'ArticlesShowController'
    })
    .otherwise({
      redirectTo: '/articles'
    });
};

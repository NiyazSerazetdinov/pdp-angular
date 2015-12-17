'use strict';

angular
  .module('pdpAngular', ['ngRoute', 'Articles'])
  .config(['$routeProvider', RouteProvider]);

angular.module('Articles', []);

function RouteProvider($routeProvider) {
  $routeProvider
    .when('/articles', {
      templateUrl: 'articles/index.html',
      controller: 'ArticlesIndexController'
    }).when('/articles/new', {
      templateUrl: 'articles/new.html',
      controller: 'ArticlesNewController'
    })
    .otherwise({
      redirectTo: '/articles'
    });
};

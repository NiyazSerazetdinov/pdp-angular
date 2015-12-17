'use strict';

angular
  .module('pdpAngular', ['ngRoute', 'ArticleControllers'])
  .config(['$routeProvider', RouteProvider]);

angular.module('ArticleControllers', []);

function RouteProvider($routeProvider) {
  $routeProvider
    .when('/articles', {
      templateUrl: 'articles/index.html',
      controller: 'ArticlesIndexController'
    })
    .otherwise({
      redirectTo: '/articles'
    });
};

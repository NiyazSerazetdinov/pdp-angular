'use strict';

angular
  .module('PdpAngular', ['ngRoute'])
  .config(['$routeProvider', RouteProvider]);

function RouteProvider($routeProvider) {
  $routeProvider
    .when('/articles', {
      templateUrl: 'articles/index.html',
      controller: 'ArticlesController'
    })
    .otherwise({
      redirectTo: '/articles'
    });
};

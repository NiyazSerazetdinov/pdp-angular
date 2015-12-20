(function() {
  'use strict';

  angular
    .module('pdpAngular.core')
    .config(['$routeProvider', RouteProvider]);

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
})();

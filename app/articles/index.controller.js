(function() {
  'use strict';

  angular
    .module('pdpAngular.articles')
    .controller('ArticlesIndexController', ArticlesIndexController);

  ArticlesIndexController.$inject =  ['$scope', '$http', 'API_ROOT_URL'];

  function ArticlesIndexController($scope, $http, API_ROOT_URL) {
    $http.get(API_ROOT_URL + '/v1/articles')
      .then(function(response) {
        $scope.articles = response.data.articles;
      });
  }
})();

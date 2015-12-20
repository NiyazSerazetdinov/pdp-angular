(function() {
  'use strict';

  angular
    .module('pdpAngular.articles')
    .controller('ArticlesNewController', ArticlesNewController);

  ArticlesNewController.$inject =  ['$scope', '$http','$location', 'API_ROOT_URL'];

  function ArticlesNewController($scope, $http, $location, API_ROOT_URL) {
    $scope.post = function(article) {
      $http.post(API_ROOT_URL + '/v1/articles', article)
        .then(function(response) {
          $location.path('/articles');
        })
    };
  }
})();

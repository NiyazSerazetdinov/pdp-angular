'use strict'

angular
  .module('Articles')
  .controller('ArticlesIndexController', ['$scope', '$http', 'API_ROOT_URL', ArticlesIndexController])

function ArticlesIndexController($scope, $http, API_ROOT_URL) {
  $http.get(API_ROOT_URL + '/v1/articles')
    .then(function(response) {
      $scope.articles = response.data.articles;
    });
}

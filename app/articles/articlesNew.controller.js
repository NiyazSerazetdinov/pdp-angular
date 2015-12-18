'use strict'

angular
  .module('Articles')
  .controller('ArticlesNewController', ['$scope', '$http','$location', 'API_ROOT_URL', ArticlesNewController])

function ArticlesNewController($scope, $http, $location, API_ROOT_URL) {
  $scope.post = function(article) {
    $http.post(API_ROOT_URL + '/v1/articles', article)
      .then(function(response) {
        $location.path('/articles');
      })
  };
}

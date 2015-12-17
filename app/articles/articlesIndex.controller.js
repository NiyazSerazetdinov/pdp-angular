'use strict'

angular
  .module('Articles')
  .controller('ArticlesIndexController', ['$scope', '$http', ArticlesIndexController])

function ArticlesIndexController($scope, $http) {
  $http.get('http://pdp-angular-api.herokuapp.com/v1/articles')
    .then(function(response) {
      $scope.articles = response.data.articles;
    });
}

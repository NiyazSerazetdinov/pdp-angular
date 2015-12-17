'use strict'

angular
  .module('Articles')
  .controller('ArticlesShowController', ['$scope', '$http','$routeParams', ArticlesShowController])

function ArticlesShowController($scope, $http, $routeParams) {
  $http.get('http://pdp-angular-api.herokuapp.com/v1/articles/'+$routeParams.articleId)
    .then(function(response) {
      console.log(response.data);
      $scope.article = response.data.article;
    });
}

'use strict'

angular
  .module('Articles')
  .controller('ArticlesNewController', ['$scope', '$http','$location', ArticlesNewController])

function ArticlesNewController($scope, $http, $location) {
  $scope.post = function(article) {
    $http.post('http://pdp-angular-api.herokuapp.com/v1/articles', article)
      .then(function(response) {
        $location.path('/articles');
      })
  };
}

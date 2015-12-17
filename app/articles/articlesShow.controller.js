'use strict'

angular
  .module('Articles')
  .controller('ArticlesShowController', ['$scope', '$http','$routeParams', ArticlesShowController])

function ArticlesShowController($scope, $http, $routeParams) {
  var articleUrl = 'http://pdp-angular-api.herokuapp.com/v1/articles/'+$routeParams.articleId;

  $http.get(articleUrl)
    .then(function(response) {
      $scope.article = response.data.article;
      $scope.comments = response.data.article.comments;
    });

  $scope.postComment = function(comment) {
    $http.post(articleUrl+'/comments', comment)
      .then(function(response) {
        $scope.comments.push(response.data.comment);
        $scope.comment.text = "";
      })
  };
}

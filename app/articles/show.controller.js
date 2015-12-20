(function() {
  'use strict';

  angular
    .module('pdpAngular.articles')
    .controller('ArticlesShowController', ArticlesShowController);

  ArticlesShowController.$inject = ['$scope', '$http', '$routeParams', 'API_ROOT_URL'];

  function ArticlesShowController($scope, $http, $routeParams, API_ROOT_URL) {
    var articleUrl = API_ROOT_URL + '/v1/articles/'+$routeParams.articleId;

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
})();

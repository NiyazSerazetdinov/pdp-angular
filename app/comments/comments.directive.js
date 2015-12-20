(function() {
  'use strict';

  angular
    .module('pdpAngular.comments')
    .directive('paComment', nwComment);

  function nwComment() {
    return {
      restrict: 'E',
      templateUrl: 'comments/pa-comment.html',
      scope: {
        comment: '='
      }
    };
  }
})();

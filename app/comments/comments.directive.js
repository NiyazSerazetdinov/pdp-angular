 angular
  .module('Comments')
  .directive('nwComment', function() {
    return {
      restrict: 'E',
      templateUrl: 'comments/nw-comment.html',
      scope: {
        comment: '='
      }
    };
  });

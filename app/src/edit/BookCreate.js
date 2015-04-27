angular.module('app.edit')
  .controller('BookCreateCtrl',function ($scope,  $location, BookDataManager) {
    $scope.createBook = function(){
      BookDataManager.createBook($scope.book)
        .then(function(success){
          if(success){
            $location.path('/');
          }
        });
    }
  })
  .directive('bookCreate', function(){
    return {
      restrict: 'E',
      templateUrl: 'src/edit/BookCreate.html'
    }
  });
angular.module('edit')
  .controller('BookCreateCtrl', BookCreateCtrl)
  .directive('bookCreate', bookCreate);

function BookCreateCtrl($scope,  $location, BookDataManager) {
  $scope.createBook = function(){
    BookDataManager.createBook($scope.book)
    .then(function(success){
      if(success){
        $location.path('/');
      }
    });
  }
}

function bookCreate() {
  return {
    restrict: 'E',
    templateUrl: 'src/edit/BookCreate.html'
  }
}
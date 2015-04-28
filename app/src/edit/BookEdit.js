angular.module('edit')
  .controller('BookEditCtrl',function ($scope, $routeParams, $location,BookDataManager) {
    BookDataManager.getBookByIsbn($routeParams.isbn)
      .then(function(book){
        $scope.book = book;
      });


    $scope.saveBook = function(){
      BookDataManager.saveBook($scope.book)
        .then(function(success){
          if(success){
            $location.path('/');
          }
        });
    }

  })
  .directive('bookEditView', function(){
    return {
      restrict: 'E',
      templateUrl: 'src/edit/BookEditViewDirective.html'
    }
  });
  
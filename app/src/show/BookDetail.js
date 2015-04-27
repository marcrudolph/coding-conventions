angular.module('app.show')
  .controller('BookDetailCtrl',function ($scope, $routeParams, $location, BookDataManager) {
    $scope.isbn = $routeParams.isbn;


    BookDataManager.getBookByIsbn($routeParams.isbn)
      .then(function(book){
        $scope.book = book;
      });


    $scope.saveBook = function(){
      BookDataManager.save($scope.book)
        .then(function(success){
          if(success){
            $location.path('/');
          }
        });
    }

  });
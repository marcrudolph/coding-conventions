angular.module('show')
  .controller('BookListCtrl', function ($scope,BookDataManager) {
    BookDataManager.getBooks()
      .then(function(data){
        $scope.books = data;
      });
  })
  .directive('bookList', function(){
    return {
      restrict: 'E',
      templateUrl: 'src/show/book-list.html'
    }
  });
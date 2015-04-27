angular.module('show')
    .controller('BookListCtrl', BookListCtrl)
    .directive('bookList', bookList);


BookListCtrl.$inject = ['$scope', '$rootScope', 'BookDataService'];
function BookListCtrl($scope, $rootScope, BookDataService) {
    $scope.books = null;

    BookDataService.getBooks()
    .then(function(data){
        $scope.books = data;
    });
}


function bookList()  {
    return {
        restrict: 'E',
        templateUrl: 'src/show/BookList.html'
    }
}
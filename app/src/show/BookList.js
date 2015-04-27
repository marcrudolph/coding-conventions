angular.module('app.show')
    .controller('BookListCtrl', BookListCtrl)
    .directive('bookList', bookList);


BookListCtrl.$inject = ['$scope', '$rootScope', 'BookDataManager'];
function BookListCtrl($scope, $rootScope, BookDataManager) {
    $scope.books = null;

    BookDataManager.getBooks()
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
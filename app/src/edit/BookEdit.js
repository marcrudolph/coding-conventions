angular.module('edit')
    .controller('BookEditCtrl', BookEditCtrl)
    .directive('bookEditView', bookEditView);

BookEditCtrl.$inject = ['$scope', '$location', '$routeParams', 'BookDataService', 'book'];
function BookEditCtrl($scope, $location, $routeParams, BookDataService, book) {
    $scope.book = book;
    $scope.saveBook = saveBook;


    // BookDataService.getBookByIsbn($routeParams.isbn)
    // .then(function(book){
    //     $scope.book = book;
    // });

    function saveBook(){
        BookDataService.saveBook($scope.book)
        .then(function(success){
            if(success){
                $location.path('/');
            }
        });
    }
}

BookEditCtrl.resolve = {
    book: resolveBook
}
resolveBook.$inject = ['$route', 'BookDataService'];
function resolveBook($route, BookDataService) {
    return BookDataService.getBookByIsbn($route.current.params.isbn)
}




function bookEditView(){
    return {
        restrict: 'E',
        templateUrl: 'src/edit/BookEditView.html'
    }
}


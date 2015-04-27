angular.module('app.edit')
    .controller('BookEditCtrl', BookEditCtrl)
    .directive('bookEdit', bookEdit);

BookEditCtrl.$inject = ['$scope', '$location', '$routeParams', 'BookDataManager'];
function BookEditCtrl($scope, $location, $routeParams, BookDataManager) {
    $scope.book = null;
    $scope.saveBook = saveBook;

    init();

    function init() {
        BookDataManager.getBookByIsbn($routeParams.isbn)
        .then(function(book) {
            $scope.book = book;
        });
    }

    function saveBook(){
        BookDataManager.saveBook($scope.book)
        .then(function(success){
            if(success){
                $location.path('/');
            }
        });
    }
}




function bookEdit(){
    return {
        restrict: 'E',
        templateUrl: 'src/edit/BookEdit.html'
    }
}


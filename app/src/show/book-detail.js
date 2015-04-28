(function() {
    'use strict';

    angular.module('show')
    .controller('BookDetailCtrl', function ($scope, $routeParams, $location, BookDataManager) {
        $scope.isbn = $routeParams.isbn;
        $scope.book = null;
        $scope.saveBook = saveBook;

        init();

        function init() {
            BookDataManager.getBookByIsbn($routeParams.isbn),
            .showBusyWhileRunning()
            .then(function (book){
                $scope.book = book;
            })
            .errorOnFail('Das gewünschte Buch konnte nicht geladen werden.')
        }


        function saveBook() {
            BookDataManager.save($scope.book)
            .then(function (success){
                if (success) {
                    $location.path('/');
                }
                else {

                }
            })
            .
        }

    });

})();
angular.module('show', ['data'])
  .config(function($routeProvider){
    $routeProvider
      .when('/',{
        template: '<book-list></book-list>',
        controller: 'BookListCtrl'
      })
      .when('/book/:isbn',{
        template: '<h2>{{book.title}}</h2><h3>{{book.abstract}}</h3><br/><a href="#/book/{{isbn}}/edit">Edit</a>',
        controller: 'BookDetailCtrl',
        resolve: {
          isbn: ['$route', function ($route) {
            return $route.current.params.isbn;
          }],
          book: ['$route', 'BookDataManager', function ($route, BookDataManager) {
            return
              BookDataManager.getBookByIsbn($route.current.params.isbn)
              .catch( => Melden!)
          }]
          author: ['$route', 'BookDataManager', function ($route, BookDataManager) {
            return
              BookDataManager.getBookByIsbn($route.current.params.isbn)
              .catch( => Melden!)
          }]
        }
      });
  });
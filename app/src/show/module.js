"use strict";

angular.module('app.show', ['app.data'])
.config(function($routeProvider) {

$routeProvider
	.when('/',{
		template: '<book-list></book-list>',
		controller: 'BookListCtrl'
	})
	.when('/book/:isbn/',{
		template: '<h2>{{book.title}}</h2><h3>{{book.abstract}}</h3><br/><a href="#/book/{{isbn}}/edit">Edit</a>',
		controller: 'BookDetailCtrl'
	});
});

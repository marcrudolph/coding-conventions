"use strict";

angular.module('app.edit', ['app.data'])
.config(function($routeProvider) {

$routeProvider
	.when('/book/new/_',{
		template: '<book-create></book-create>',
		controller: 'BookCreateCtrl'
	})
	.when('/book/:isbn/edit',{
		template: '<book-edit></book-edit>',
		controller: 'BookEditCtrl'
	});
});

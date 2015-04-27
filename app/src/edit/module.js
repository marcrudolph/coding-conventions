"use strict";

angular.module('edit', ['data'])
.config(function($routeProvider) {

$routeProvider
	.when('/book/new/_',{
		template: '<book-create-view></book-create-view>',
		controller: 'BookCreateCtrl'
	})
	.when('/book/:isbn/edit',{
		template: '<book-edit-view></book-edit-view>',
		controller: 'BookEditCtrl',
		resolve: BookEditCtrl.resolve
	});
});

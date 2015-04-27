angular.module('app.edit')
.directive('bookForm', function(){
	return {
	  restrict: 'E',
	  templateUrl: 'src/edit/BookForm.html'
	}
});
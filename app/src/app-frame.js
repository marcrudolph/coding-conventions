angular.module('myApp')
	.controller('AppCtrl', AppCtrl)
    .directive('appFrame', appFrame);

function appFrame() {
    return {
        restrict: 'E',
        templateUrl: 'src/app-frame.html'
    }
}

AppCtrl.$inject = ['$rootScope'];
function AppCtrl($rootScope) {
	$rootScope.$on("$routeChangeError", function () {
		debugger;
	console.log("failed to change routes");
	});

	$rootScope.$on('$routeChangeSuccess',
	function(event, current, previous) {
		debugger;
	});

}
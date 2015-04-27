angular.module('app')
	.controller('AppFrameCtrl', AppFrameCtrl)
    .directive('appFrame', appFrame);


AppFrameCtrl.$inject = ['$rootScope'];
function AppFrameCtrl($rootScope) {
	$rootScope.$on("$routeChangeError", function () {
		console.log("failed to change routes");
	});

}

function appFrame() {
    return {
        restrict: 'E',
        templateUrl: 'src/app-frame.html'
    }
}
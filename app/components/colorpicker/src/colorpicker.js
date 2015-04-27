(function() {
    'use strict';

    angular.module('colorpicker',[])
    .directive('colorpicker', colorpicker)
    .controller('colorsCtrl');


    function colorpicker() {
        return {
            restrict: 'E',
            templateUrl: 'components/colorpicker/src/colorpickerDirective.html',
            scope: {
                color : '=colorData'
            }
        }
    };


    function colorsCtrl ($scope, userService) {
        $scope.user = userService.getUser();
    };


})();
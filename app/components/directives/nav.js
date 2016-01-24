var app = angular.module('lybApp', []);

function globalCtrl($scope) {

}

app.directive('resize', function ($window) {
	return function (scope, element) {
		var w = angular.element($window);
		scope.getWindowDimensions = function () {
			return {
				//'h' : w.height(),
				'w' : w.width()
			};
		};

		scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {

			scope.windowWidth = newValue.w;

			scope.class
		})
	}
})
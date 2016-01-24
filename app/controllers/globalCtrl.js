"use strict";

angular
.module('lybApp')
.controller('globalCtrl', ['$scope', '$window', '$watch', function($scope, $window, $watch) {

	$scope.$watch(function(){
		return window.innerWidth;
		}, function(value) {

			console.log(value);
	})


	$scope.bodySlideBtn = function() {
		$scope.bodySlideVisble = !$scope.bodySlideVisble;
	}
}

])
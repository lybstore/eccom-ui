"use strict";

angular
.module('lybApp')
.controller('globalCtrl', ['$scope', function($scope) {

	$scope.bodySlideBtn = function() {
		$scope.bodySlideVisble = !$scope.bodySlideVisble;
	}
}

])
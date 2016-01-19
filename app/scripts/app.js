'use strict';

angular
	.module("lybApp", ['ui.router'])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	        $urlRouterProvider.otherwise('/');

	        $stateProvider
	        	.state('home' , {
	        		url: '/',
	        		templateUrl: 'app/temples/home.html'
	        	})

	        }])
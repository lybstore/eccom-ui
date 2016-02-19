'use strict';

angular
	.module("lybApp", ['ui.router'])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	        $urlRouterProvider.otherwise('/');

	        $stateProvider
	        	.state('home' , {
	        		url: '/',
	        		templateUrl: 'app/views/home.html'
	        	})
	        	.state('store/mens' , {
	        		url: '/store/mens',
	        		templateUrl: 'app/views/store/mens.html'
	        	});

	        }])
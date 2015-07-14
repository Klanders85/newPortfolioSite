// init the app
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider

	.when('/home', {
		templateUrl : 'views/home.html',
		controller  : 'homeController'
	})
	.when('/about', {
		templateUrl : 'views/about.html',
		controller  : 'aboutController'
	})
	.when('/portfolio', {
		templateUrl : 'views/portfolio.html',
		controller  : 'portfolioController'
	})
	.when('/contact', {
		templateUrl : 'views/contact.html',
		controller  : 'contactController'
	})
})

app.controller('homeController', function($scope){
	$scope.message = 'Home View painted';
})

app.controller('aboutController', function($scope){
	$scope.message = 'About View painted';
})

app.controller('portfolioController', function($scope){
	$scope.message = 'Portfolio View painted';
})

app.controller('contactController', function($scope){
	$scope.message = 'Contact View painted';
})
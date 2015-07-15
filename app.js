// init the app
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl : 'views/home.html',
		controller  : 'homeController'
	})	

	.when('/home', {
		templateUrl : 'views/home.html',
		controller  : 'homeController'
	})
	.when('/about', {
		templateUrl : 'views/about.html',
		controller  : 'aboutController',
		activetab   : 'about'
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

// Home View Controller
app.controller('homeController', function($scope){
	$scope.message = 'Home View painted';
})

// About View Controller
app.controller('aboutController', function($scope){
	$scope.message = 'About View painted';
})

// Portfolio View Controller
app.controller('portfolioController', function($scope){
	$scope.message = 'Portfolio View painted';
})

// Contact View Controller
app.controller('contactController', function($scope){
	$scope.message = 'Contact View painted';
})
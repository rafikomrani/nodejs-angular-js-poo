	var app=angular.module('monapp',["ngRoute"]);
	app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/users.html",
        controller:"ctr"
    })
    .when("/profil/:id", {
        templateUrl : "views/profil.html",
        controller:"profil"
    })
    .when("/main", {
        templateUrl : "views/main.html",
        
    })
    .otherwise({
        templateUrl : "views/404.html",
    });
    $locationProvider.html5Mode(true);
});
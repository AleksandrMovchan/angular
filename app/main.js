'use strict';

var moviesApp = angular.module('movies-app', ['ngSanitize','ngRoute']);

moviesApp
    .constant('BASE_URL', {
        url: 'https://api.themoviedb.org/3/'
    })
    .constant('API_KEY', {
        url: '2bffc68560bcf99a67d3ea8fa8f937b4'
    })
    .config(function($routeProvider) {
        $routeProvider
            .when("/about_movie/:id", {
                templateUrl: "app/templates/aboutMovie.html",
                controller: "aboutMovieCtrl"
            })
            .otherwise({
                templateUrl: "app/templates/upcomingMovies.html",
                controller: "upcomingMoviesCtrl"
            })
    });
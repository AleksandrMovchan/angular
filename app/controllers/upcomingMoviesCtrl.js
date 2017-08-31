'use strict';

moviesApp.controller('upcomingMoviesCtrl',
    function upcomingMovies($scope, upcomingService) {
        var upcomingPromise = upcomingService.getUpcomingMovies();
        upcomingPromise.then(
            function (films) {
                $scope.upcmovies = films;
            },
            function (status) {
                console.log(status);
            });
    });
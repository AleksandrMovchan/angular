'use strict';

moviesApp.controller('aboutMovieCtrl',
    function ($scope, $routeParams, aboutMovieService, movieCreditsService, movieTrailersService) {
        var movieId = $routeParams["id"];
        console.log(movieId);
        var aboutMoviePromise = aboutMovieService.getMovieInfo(movieId);
        var movieCreditsPromise = movieCreditsService.getMovieCredits(movieId);
        var movieTrailersPromise = movieTrailersService.getMovieTrailers(movieId);

        aboutMoviePromise.then(
            function (filmAttr) {
                $scope.aboutMovie = filmAttr;
            },
            function (status) {
                console.log(status);
            });

        movieCreditsPromise.then(
            function (filmCredits) {
                $scope.movieCredits = filmCredits;
                console.dir(filmCredits);
            },
            function (status) {
                console.log(status);
            });

        movieTrailersPromise.then(
            function (filmTrailers) {
                $scope.movieTrailers = filmTrailers;
            },
            function (status) {
                console.log(status);
            });
    });
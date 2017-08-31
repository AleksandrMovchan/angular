'use strict';

angular.module('movies-app').controller('upcomingController',
    function upcomingMovies($scope, upcomingService) {

        // По нажатию на кнопку

        // $scope.loaded = false;
        //
        // $scope.load = function() {
        //     var upcomingPromise = upcomingService.getUpcomingMovies();
        //     upcomingPromise.then(
        //         function (films) {
        //             $scope.upcmovies = films;
        //             $scope.loaded = true;
        //         },
        //         function (status) {
        //             console.log(status);
        //         });
        // }

        // При загрузке

        var upcomingPromise = upcomingService.getUpcomingMovies();
        upcomingPromise.then(
            function (films) {
                $scope.upcmovies = films;
            },
            function (status) {
                console.log(status);
            });
    });

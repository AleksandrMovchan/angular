'use strict';

angular.module('movies-app').controller('parentController',

    // 2 способа передачи данных посредством событий через parentController

    // способ №1 - через получение события с наименованием, которое пойдет через
    // broadcast в другой контроллер с новым названием

    // function renderingMedia($scope) {
    //     $scope.$on('searchResultsRendering', function(event, mediaResults){
    //         $scope.$broadcast('searchResultsBroadcasting', mediaResults);
    //     });
    // }

    // способ №2 - через получение события с наименованием, которое пойдет через
    // broadcast в другой контроллер с тем же названием (костыль)

    function renderingMedia($scope) {
        $scope.$on('searchResultsRendering', function(event, mediaResults){
        });
    }

);
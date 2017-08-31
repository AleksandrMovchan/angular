'use strict';

angular.module('movies-app').controller('renderingController',

    // Загрузка данных через отлавливание события в $rootScope

    // function renderingMedia($scope, $rootScope) {
    //     $rootScope.$on('searchResultsRendering', function(event, mediaResults){
    //         $scope.srchmedia = mediaResults;
    //     });

    // Загрузка данных через отлавливание события в parentController

    // способ №1 - через получение от parent'a через broadcast события с другим наименованием

    // function renderingMedia($scope) {
    //     $scope.$on('searchResultsBroadcasting', function(event, mediaResults){
    //         $scope.srchmedia = mediaResults;
    //     });
    // }

    // способ №2 - через получение от parent'a посредством broadcast события с наименованием, переданным
    // через emit (см. костыль)

    function renderingMedia($scope) {
        $scope.$on('searchResultsRendering', function(event, mediaResults){
            $scope.srchmedia = mediaResults;
        });
    }

);
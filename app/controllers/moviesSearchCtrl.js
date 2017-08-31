'use strict';

angular.module('movies-app').controller('moviesSearchController',
    // function movieSearch($scope, $rootScope, moviesSearchService) {
    function movieSearch($scope, moviesSearchService) {

        $scope.movieSearch = {
            name: null,
            showTypes: [{name: "Фильмы", value: "movie"}, {name: "Сериалы и ТВ-шоу", value: "tv"}],
            typeSelected: null
        };

        $scope.search = function () {
            if ($scope.movieSearch.typeSelected) {
                var showType = $scope.movieSearch.typeSelected;
                var movieSearchName = $scope.movieSearch.name;
                var searchPromise = moviesSearchService.getSearchedMovies(movieSearchName, showType);
                searchPromise.then(
                    function (films) {
                        switch (showType) {
                            case 'movie':
                                var mediaResults = [];
                                for (var i = 0; i < films.length; i++) {
                                    mediaResults[i] = {};
                                    mediaResults[i].title = films[i].title;
                                    mediaResults[i].original_title = films[i].original_title;
                                    mediaResults[i].poster_path = films[i].poster_path;
                                }

                                // 2 способа передачи данных посредством событий через parentController

                                // способ №1 - через отправку в parent события с наименованием, которое пойдет через
                                // broadcast в другой контроллер с новым названием

                                // $scope.$emit('searchResultsRendering', mediaResults);

                                // способ №2 - через отправку в parent, и далее в другой контроллер посредством
                                // $parent.$broadcast, события с наименованием, переданным через emit (костыль)

                                $scope.$parent.$broadcast('searchResultsRendering', mediaResults);


                                // Отправка данных через инициацию события в $rootScope

                                // $rootScope.$emit('searchResultsRendering', mediaResults);


                                // Простая передача данный в представление без отбщения контроллеров

                                // $scope.srchmedia = mediaResults;
                                break;
                            case 'tv':
                                var mediaResults = [];
                                for (var i = 0; i < films.length; i++) {
                                    mediaResults[i] = {};
                                    mediaResults[i].title = films[i].name;
                                    mediaResults[i].original_title = films[i].original_name;
                                    mediaResults[i].poster_path = films[i].poster_path;
                                }
                                $scope.$emit('searchResultsRendering', mediaResults);
                                // $scope.$parent.$broadcast('searchResultsRendering', mediaResults);
                                // $rootScope.$emit('searchResultsRendering', mediaResults);
                                // $scope.srchmedia = mediaResults;
                                break;
                        }
                    },
                    function (status) {
                        console.log(status);
                    });
            }
        }
    });


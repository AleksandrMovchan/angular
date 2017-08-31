'use strict';

angular.module('movies-app').service('moviesSearchService', function($http, $q, BASE_URL, API_KEY) {
    return {
        getSearchedMovies: function(movieName, showType){
            var deferred = $q.defer();
            var searchUrl = BASE_URL.url + 'search/' + showType + '?api_key=' + API_KEY.url + '&language=ru-RU&query='
                + movieName + '&page=1&include_adult=false';
            $http.get(searchUrl).then(
                function resSuccess(response) {
                    deferred.resolve(response.data.results);
                },
                function resError(response) {
                    deferred.reject(response.status);
                }
            );
            return deferred.promise;
        }
    }
});

'use strict';

moviesApp.service('aboutMovieService', function($http, $q, BASE_URL, API_KEY) {
    return {
        getMovieInfo: function(movieId){
            var deferred = $q.defer();
            var movieUrl =  BASE_URL.url
                            + 'movie/'
                            + movieId
                            + '?api_key='
                            + API_KEY.url
                            + '&language=ru-RU';
            $http.get(movieUrl).then(
                function resSuccess(response) {
                    deferred.resolve(response.data);
                },
                function resError(response) {
                    deferred.reject(response.status);
                    // deferred.reject(response.data);
                }
            );
            return deferred.promise;
        }
    }
});
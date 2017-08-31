'use strict';

moviesApp.service('movieTrailersService', function($http, $q, BASE_URL, API_KEY) {
    return {
        getMovieTrailers: function(movieId){
            var deferred = $q.defer();
            var movieUrl = BASE_URL.url + 'movie/' + movieId + '/credits?api_key=' + API_KEY.url;
            $http.get(movieUrl).then(
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
'use strict';

moviesApp.service('movieCreditsService', function($http, $q, BASE_URL, API_KEY) {
    return {
        getMovieCredits: function(movieId){
            var deferred = $q.defer();
            var movieUrl = BASE_URL.url + 'movie/' + movieId + '/credits?api_key=' + API_KEY.url;
            $http.get(movieUrl).then(
                function resSuccess(response) {
                    deferred.resolve(response.data.cast);
                },
                function resError(response) {
                    deferred.reject(response.status);
                }
            );
            return deferred.promise;
        }
    }
});
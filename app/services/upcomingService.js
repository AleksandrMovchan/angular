'use strict';

moviesApp.service('upcomingService', function($http, $q, BASE_URL, API_KEY) {
    return {
        getUpcomingMovies: function(){
            var deferred = $q.defer();
            var upcomingUrl = BASE_URL.url
                              + 'movie/upcoming?api_key='
                              + API_KEY.url
                              + '&language=ru-RU&page=1';
            $http.get(upcomingUrl).then(
                function success(response) {
                    deferred.resolve(response.data.results);
                },
                function error(response) {
                    deferred.reject(response.status);
                }
            );
            return deferred.promise;
        }
    }
});

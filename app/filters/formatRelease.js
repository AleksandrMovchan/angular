'use strict';

moviesApp.filter('formatReleaseDate', function() {
    return function(release) {
        if (release !== undefined) {
            console.log(release);
            return release.substr(0, 4);
        }
    }
});

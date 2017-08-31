describe('Get Info About Movie Test', function() {
    var movieCredits, $httpBackend, scope;
    beforeEach(module('movies-app'));
    beforeEach(inject(function(_movieCreditsService_, _$httpBackend_, $rootScope) {
        movieCredits = _movieCreditsService_;
        $httpBackend = _$httpBackend_;
    }));
    afterEach(function() {
        $httpBackend.verifyNoOutstandingRequest();
        $httpBackend.verifyNoOutstandingExpectation();
    });

    it('should send get-request}', function () {
        $httpBackend
            .when('GET', /.*/ig)
            .respond(200, {test:"testName"});
        movieCredits.getMovieCredits(333333);
        $httpBackend.flush();
    });

    it('should send correct get-request}', function () {
        $httpBackend
            .when('GET', 'https://api.themoviedb.org/3/movie/333333/credits?api_key=2bffc68560bcf99a67d3ea8fa8f937b4')
            .respond(200, {test:"testName"});
        movieCredits.getMovieCredits(333333);
        $httpBackend.flush();
    });

    it('should return defined promise', function () {
        $httpBackend
            .when('GET', 'https://api.themoviedb.org/3/movie/333333/credits?api_key=2bffc68560bcf99a67d3ea8fa8f937b4')
            .respond(200, {test:"testName"});
        var result = movieCredits.getMovieCredits(333333);
        $httpBackend.flush();
        expect(result.then).toBeDefined();
    });

    it('should return object {test:"testName"} in case of success server response', function () {
        $httpBackend
            .when('GET', 'https://api.themoviedb.org/3/movie/333333/credits?api_key=2bffc68560bcf99a67d3ea8fa8f937b4')
            .respond(200, {
                cast: {
                    test: "testName"
                }
            });
        var result = movieCredits.getMovieCredits(333333);
        $httpBackend.flush();
        expect(result.then().$$state.value).toEqual({test:"testName"});
    });

    it('should return object {test:"testName"} in case of success server response', function () {
        var spyHandler = jasmine.createSpy('successHandler');
        $httpBackend
            .when('GET', 'https://api.themoviedb.org/3/movie/333333/credits?api_key=2bffc68560bcf99a67d3ea8fa8f937b4')
            .respond(200, {
                cast: {
                    test: "testName"
                }
            });
        movieCredits.getMovieCredits(333333).then(spyHandler);
        //console.dir(movieCredits.getMovieCredits(333333).then(spyHandler));
        $httpBackend.flush();
        expect(spyHandler).toHaveBeenCalledWith({test:"testName"});
    });

    it('should return error object in case of server response with error', function () {
        $httpBackend
            .when('GET', 'https://api.themoviedb.org/3/movie/333333/credits?api_key=2bffc68560bcf99a67d3ea8fa8f937b4')
            .respond(500, {
                code: 500,
                message: 'Error message'
            });
        var spyHandler = jasmine.createSpy('errorHandler');
        movieCredits.getMovieCredits(333333).then(null, spyHandler);
        $httpBackend.flush();
        expect(spyHandler).toHaveBeenCalledWith(500);
        // expect(spyHandler).toHaveBeenCalledWith({code:500, message: 'Error message'});

    });
});
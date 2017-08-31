describe('Date of Film Release Filter Test', function() {
    var filterToTest;
    beforeEach(module('movies-app'));
    beforeEach(inject(function($filter){
        filterToTest = $filter;
    }));
    it('returns year only after processing date format yyyy-mm-dd', function() {
        var result = filterToTest('formatReleaseDate');
        expect(result('2013-09-13')).toEqual('2013');
    });
});
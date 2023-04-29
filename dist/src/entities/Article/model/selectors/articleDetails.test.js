import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading, } from './articleDetails';
describe('articleDetails', function () {
    test('should return value', function () {
        var data = {
            id: '1',
            title: 'Зенит',
            subtitle: 'Чемпион',
        };
        var state = {
            articleDetails: {
                data: data,
            },
        };
        expect(getArticleDetailsData(state)).toEqual(data);
    });
    test('should return isLoading', function () {
        var state = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state)).toEqual(true);
    });
    test('should return error', function () {
        var state = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state)).toEqual('error');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getArticleDetailsData(state)).toEqual(undefined);
    });
    test('should work with empty error', function () {
        var state = {};
        expect(getArticleDetailsError(state)).toEqual(undefined);
    });
    test('should work with empty isLoading', function () {
        var state = {};
        expect(getArticleDetailsIsLoading(state)).toEqual(undefined);
    });
});

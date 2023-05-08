import { getArticleCommentsError, getArticleCommentsIsLoading, } from './comments';
describe('articleDetails', function () {
    test('should return isLoading', function () {
        var state = {
            articleDetailsPage: {
                comments: {
                    isLoading: true,
                },
            },
        };
        expect(getArticleCommentsIsLoading(state)).toEqual(true);
    });
    test('should return error', function () {
        var state = {
            articleDetailsPage: {
                comments: {
                    error: 'ERROR',
                },
            },
        };
        expect(getArticleCommentsError(state)).toEqual('error');
    });
    test('should work with empty error', function () {
        var state = {};
        expect(getArticleCommentsError(state)).toEqual(undefined);
    });
    test('should work with empty isLoading', function () {
        var state = {};
        expect(getArticleCommentsIsLoading(state)).toEqual(undefined);
    });
});

import { getLoginError } from './getLoginError';
describe('getLoginError', function () {
    test('should return error value', function () {
        var state = {
            loginForm: { error: 'error' },
        };
        expect(getLoginError(state)).toEqual('error');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginError(state)).toEqual(undefined);
    });
});

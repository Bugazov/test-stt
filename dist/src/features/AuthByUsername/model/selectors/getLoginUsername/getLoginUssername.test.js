import { getLoginUsername } from './getLoginUsername';
describe('getLoginError', function () {
    test('should return username value', function () {
        var state = {
            loginForm: { username: 'islam' },
        };
        expect(getLoginUsername(state)).toEqual('islam');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginUsername(state)).toEqual('');
    });
});

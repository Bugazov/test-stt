import { getLoginPassword } from './getLoginPassword';
describe('getLoginError', function () {
    test('should return password value', function () {
        var state = {
            loginForm: { password: 'zloy' },
        };
        expect(getLoginPassword(state)).toEqual('zloy');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginPassword(state)).toEqual('');
    });
});

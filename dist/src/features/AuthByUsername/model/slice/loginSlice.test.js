import { loginReducer } from 'features/AuthByUsername';
import { loginActions } from './loginSlice';
describe('loginSlice', function () {
    test('test set password', function () {
        var state = { password: 'ee' };
        expect(loginReducer(state, loginActions.setPassword('zloy'))).toEqual({ password: 'zloy' });
    });
    test('test set username', function () {
        var state = { username: '' };
        expect(loginReducer(state, loginActions.setUsername('islam'))).toEqual({ username: 'islam' });
    });
});

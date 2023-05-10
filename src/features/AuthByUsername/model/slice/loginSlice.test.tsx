import { loginReducer } from '../slice/loginSlice';
import { loginSchema } from '../types/loginSchema';
import { loginActions } from './loginSlice';

describe('loginSlice', () => {
    test('test set password', () => {
        const state: DeepPartial<loginSchema> = { password: 'ee' };

        expect(loginReducer(state as loginSchema, loginActions.setPassword('zloy'))).toEqual({ password: 'zloy' });
    });
    test('test set username', () => {
        const state: DeepPartial<loginSchema> = { username: '' };

        expect(loginReducer(state as loginSchema, loginActions.setUsername('islam'))).toEqual({ username: 'islam' });
    });
});

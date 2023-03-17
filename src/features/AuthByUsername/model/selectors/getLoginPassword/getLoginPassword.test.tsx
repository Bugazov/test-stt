import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginError', () => {
    test('should return password value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: 'zloy' },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('zloy');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});

import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';


describe('getLoginError', () => {
    test('should return username value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: "islam" },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual("islam");
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual("");
    });
});
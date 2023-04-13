import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData, ValidateProfileError } from 'entities/Profile';
import { profileReducer } from '../slice/profileSlice';
import { profileActions } from './profileSlice';
var data = {
    first: 'Islam',
    lastname: 'Bugazov',
    age: 19,
    username: 'bugazowww',
    city: 'Grozny',
    country: Country.Russia,
    currency: Currency.RUB,
};
describe('profileSlice', function () {
    test('test set password', function () {
        var state = { readonly: false };
        expect(profileReducer(state, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });
    test('test update', function () {
        var state = {
            form: {
                first: 'islam',
            },
        };
        expect(profileReducer(state, profileActions.updateProfile({ first: 'rustam' }))).toEqual({
            form: {
                first: 'rustam',
            },
        });
    });
    test('test cancelEdit', function () {
        var state = {
            data: data,
            form: { first: '' },
            readonly: false,
        };
        expect(profileReducer(state, profileActions.cancelEdit())).toEqual({
            readonly: true,
            form: data,
            data: data,
            validateErrors: undefined,
        });
    });
    test('test update profile service pending', function () {
        var state = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test('test update profile service fullfiled', function () {
        var state = {
            isLoading: true,
        };
        expect(profileReducer(state, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data: data,
        });
    });
});

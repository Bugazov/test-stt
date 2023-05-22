import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../const/const';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileReducer } from '../slice/profileSlice';
import { profileActions } from './profileSlice';
import { ProfileSchema } from '../../model/types/editableProfileCardSchema';

const data = {
    first: 'Islam',
    lastname: 'Bugazov',
    age: 19,
    username: 'bugazowww',
    city: 'Grozny',
    country: Country.Russia,
    currency: Currency.RUB,
};

describe('profileSlice', () => {
    test('test set password', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };

        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });
    test('test update', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                first: 'islam',
            },
        };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ first: 'rustam' }))).toEqual({
            form: {
                first: 'rustam',
            },
        });
    });
    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { first: '' },
            readonly: false,
        };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            form: data,
            data,
            validateErrors: undefined,
        });
    });
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
});

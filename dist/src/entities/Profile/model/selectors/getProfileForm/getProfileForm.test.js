import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';
describe('getProfileForm.test', function () {
    test('should return value', function () {
        var data = {
            first: 'Islam',
            lastname: 'Bugazov',
            age: 19,
            username: 'bugazowww',
            city: 'Grozny',
            country: Country.Russia,
            currency: Currency.RUB,
        };
        var state = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state)).toEqual(data);
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getProfileForm(state)).toEqual(undefined);
    });
});

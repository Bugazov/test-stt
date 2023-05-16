import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';
describe('getProfileData', function () {
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
                data: data,
            },
        };
        expect(getProfileData(state)).toEqual(data);
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getProfileData(state)).toEqual(undefined);
    });
});

import { getProfileLoading } from './getProfileLoading';
describe('getProfileLoading.test', function () {
    test('should return value', function () {
        var state = {
            profile: {
                isLoading: false,
            },
        };
        expect(getProfileLoading(state)).toEqual(false);
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getProfileLoading(state)).toEqual(undefined);
    });
});

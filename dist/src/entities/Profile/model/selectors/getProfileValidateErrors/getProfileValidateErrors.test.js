import { ValidateProfileError } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';
describe('getProfileValidateErrors.test', function () {
    test('should return value', function () {
        var state = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_USER_DATA,
                ],
            },
        };
        expect(getProfileValidateErrors(state)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getProfileValidateErrors(state)).toEqual(undefined);
    });
});

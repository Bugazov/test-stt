import { getProfileReadonly } from './getProfileReadonly';
describe('getProfileReadonly.test', function () {
    test('should return value', function () {
        var state = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state)).toEqual(true);
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getProfileReadonly(state)).toEqual(undefined);
    });
});

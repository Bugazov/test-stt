import { getQueryParams } from './addQueryParams';
describe('shared/lib/url/addQueryParams', function () {
    test('test with only params', function () {
        var params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('test with multiple params', function () {
        var params = getQueryParams({
            test: 'value',
            second: 'second',
        });
        expect(params).toBe('?test=value&second=2');
    });
    test('test with undefined', function () {
        var params = getQueryParams({
            test: 'value',
            second: undefined,
        });
        expect(params).toBe('?test=value');
    });
});

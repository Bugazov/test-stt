import { getQueryParams } from './addQueryParams';

describe('shared/lib/url/addQueryParams', () => {
    test('test with only params', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('test with multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            second: 'second',
        });
        expect(params).toBe('?test=value&second=2');
    });
    test('test with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined,
        });
        expect(params).toBe('?test=value');
    });
});

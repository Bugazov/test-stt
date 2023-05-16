import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from './fetchProfileData';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const data = {
    id: '1',
    first: 'Islam',
    lastname: 'Bugazov',
    age: 19,
    username: 'bugazowww',
    city: 'Grozny',
    country: Country.Russia,
    currency: Currency.RUB,
};

describe('fetchProfileData', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('error ', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});

import axios from 'axios';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchArticleById } from './fetchArticleById';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const data = {
    id: '1',
    title: 'Зенит',
    subtitle: 'Чемпион',
    img: 'DSDSDSDSD',
    views: 200,
    createdAt: 'DSDSDSDSD',
    type: [],
    blocks: [],
};

describe('fetchArticleById', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById, {
            articleDetails: {
                data: undefined,
            },
        });
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('error ', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});

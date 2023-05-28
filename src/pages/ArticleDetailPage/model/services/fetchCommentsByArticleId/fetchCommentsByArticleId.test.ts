import axios from 'axios';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const data = [
    {
        id: '1',
        text: 'some comment',
        articleId: '1',
        userId: '1',
    },
    {
        id: '2',
        text: 'some comment 2',
        articleId: '1',
        userId: '1',
    },
];

describe('fetchArticleById', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId, {
            articleDetailsPage: {
                comments: {
                    ids: [],
                    entities: {},
                },
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
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});

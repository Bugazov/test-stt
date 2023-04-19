import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../slice/articleDetailsSlice';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const data = {
    id: '1',
    title: 'Зенит',
    subtitle: 'Чемпион',
    img: 'DSDSDSDSD',
    views: 200,
    user: { id: '1', username: 'ISLAM' },
    createdAt: 'DSDSDSDSD',
    type: [],
    blocks: [],
};

describe('articleDetailsSlice', () => {
    test('test fetch article pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: undefined,
            data: undefined,
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true,
        });
    });

    test('test fetch article service fullfiled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,

        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data, '', ''),
        )).toEqual({
            isLoading: false,
            error: undefined,
            data,
        });
    });
});

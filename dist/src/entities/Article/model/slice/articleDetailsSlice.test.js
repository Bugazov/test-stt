import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../slice/articleDetailsSlice';
var data = {
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
describe('articleDetailsSlice', function () {
    test('test fetch article pending', function () {
        var state = {
            isLoading: false,
            error: undefined,
            data: undefined,
        };
        expect(articleDetailsReducer(state, fetchArticleById.pending)).toEqual({
            isLoading: true,
        });
    });
    test('test fetch article service fullfiled', function () {
        var state = {
            isLoading: true,
        };
        expect(articleDetailsReducer(state, fetchArticleById.fulfilled(data, '', ''))).toEqual({
            isLoading: false,
            error: undefined,
            data: data,
        });
    });
});

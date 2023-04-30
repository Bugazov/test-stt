import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageInited,
} from 'pages/ArticlePage/model/selectors/articlesPageSelectors';
import { articlesPageActions } from 'pages/ArticlePage/model/slices/articlesPageSlice';
import { fetchArticlesList } from 'pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const _inited = getArticlesPageInited(getState());
        if (!_inited) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    },

);

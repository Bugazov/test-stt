import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageInited,
} from 'pages/ArticlePage/model/selectors/articlesPageSelectors';
import { articlesPageActions } from 'pages/ArticlePage/model/slices/articlesPageSlice';
import { fetchArticlesList } from 'pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList';
import { SortOrder } from 'shared/types/sortOrder';
import { ArticleSortField } from 'entities/Article';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlesPage/fetchNextArticlesPage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const _inited = getArticlesPageInited(getState());
        if (!_inited) {
            const orderFromUrl = searchParams.get('order');
            const sortFromUrl = searchParams.get('sort');
            const searchFromUrl = searchParams.get('search');

            if (orderFromUrl) {
                dispatch(articlesPageActions.setOrder(orderFromUrl as SortOrder));
            }

            if (sortFromUrl) {
                dispatch(articlesPageActions.setSort(sortFromUrl as ArticleSortField));
            }

            if (searchFromUrl) {
                dispatch(articlesPageActions.setSearch(searchFromUrl));
            }

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },

);

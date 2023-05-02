import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ArticleView } from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
var articlesAdapter = createEntityAdapter({
    selectId: function (article) { return article.id; },
});
export var getArticles = articlesAdapter.getSelectors(function (state) { return state.articlesPage || articlesAdapter.getInitialState(); });
var articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        hasMore: true,
        page: 1,
        view: ArticleView.SMALL,
        _inited: false,
        limit: 9,
        search: '',
        sort: ArticleSortField.TITLE,
        order: 'asc',
    }),
    reducers: {
        setView: function (state, action) {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: function (state) {
            var view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY);
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._inited = true;
        },
        setPage: function (state, action) {
            state.page = action.payload;
        },
        setSort: function (state, action) {
            state.sort = action.payload;
        },
        setOrder: function (state, action) {
            state.order = action.payload;
        },
        setSearch: function (state, action) {
            state.search = action.payload;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(fetchArticlesList.pending, function (state, action) {
            state.error = undefined;
            state.isLoading = true;
            if (action.meta.arg.replace) {
                articlesAdapter.removeAll(state);
            }
        })
            .addCase(fetchArticlesList.fulfilled, function (state, action) {
            state.isLoading = false;
            state.hasMore = action.payload.length > 0;
            if (action.meta.arg.replace) {
                articlesAdapter.setAll(state, action.payload);
            }
            else {
                articlesAdapter.addMany(state, action.payload);
            }
        })
            .addCase(fetchArticlesList.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
export var articlesPageReducer = articlesPageSlice.reducer, articlesPageActions = articlesPageSlice.actions;

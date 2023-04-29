import { createEntityAdapter, createSlice, } from '@reduxjs/toolkit';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
var commentAdapter = createEntityAdapter({
    selectId: function (comment) { return comment.id; },
});
export var getArticleComments = commentAdapter.getSelectors(function (state) { return state.articleDetailsComments || commentAdapter.getInitialState(); });
var articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentAdapter.getInitialState({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchCommentsByArticleId.fulfilled, function (state, action) {
            state.isLoading = false;
            commentAdapter.setAll(state, action.payload);
        })
            .addCase(fetchCommentsByArticleId.pending, function (state, action) {
            state.isLoading = true;
            state.error = undefined;
        })
            .addCase(fetchCommentsByArticleId.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
export var articleDetailsCommentsReducer = articleDetailsCommentsSlice.reducer;

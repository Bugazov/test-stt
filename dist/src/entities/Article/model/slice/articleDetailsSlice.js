import { createSlice } from '@reduxjs/toolkit';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
var initialState = {
    data: undefined,
    isLoading: false,
    error: undefined,
};
export var articleDetailsSlice = createSlice({
    name: 'article',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchArticleById.fulfilled, function (state, action) {
            state.isLoading = false;
            state.data = action.payload;
        })
            .addCase(fetchArticleById.pending, function (state, action) {
            state.isLoading = true;
            state.error = undefined;
        })
            .addCase(fetchArticleById.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
// Action creators are generated for each case reducer function
export var articleDetailsActions = articleDetailsSlice.actions;
export var articleDetailsReducer = articleDetailsSlice.reducer;

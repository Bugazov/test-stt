import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../../model/types/articleDetailsSchema';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { Article } from '../../model/types/article';

const initialState: ArticleDetailsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,

};

export const articleDetailsSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.fulfilled, (state, action:PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;

import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsPageRecommendationsReducer, } from './articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from '../../model/slices/articleDetailsCommentsSlice';
export var articleDetailsPageReducer = combineReducers({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import Text, { TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailPage/model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from 'pages/ArticleDetailPage/model/services/addCommentForArticle/addCommentForArticle';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/Page/Page';
import { articleDetailsPageReducer } from 'pages/ArticleDetailPage/model/slices';
import { getArticleRecommendationsIsLoading } from 'pages/ArticleDetailPage/model/selectors/recommendations';
import { getArticleRecommendations } from 'pages/ArticleDetailPage/model/slices/articleDetailsPageRecommendationsSlice';
import { fetchArticleRecommendations, } from 'pages/ArticleDetailPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
var reducers = {
    articleDetailsPage: articleDetailsPageReducer,
};
var ArticleDetailPage = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var id = useParams().id;
    var comments = useSelector(getArticleComments.selectAll);
    var recommendations = useSelector(getArticleRecommendations.selectAll);
    var commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    var recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    var dispatch = useAppDispatch();
    var navigate = useNavigate();
    var onSendComment = useCallback(function (text) {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    useInitialEffect(function () {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });
    if (!id) {
        return (_jsx(Page, __assign({ className: classNames(cls.ArticleDetailPage, {}, [className]) }, { children: t('Стаья не найдена') }), void 0));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsxs(Page, __assign({ className: classNames(cls.ArticleDetailPage, {}, [className]) }, { children: [_jsx(ArticleDetails, { id: id }, void 0), _jsx(Text, { size: TextSize.L, className: cls.commentTitle, title: t('Рекомендуем') }, void 0), _jsx(ArticleList, { articles: recommendations, isLoading: recommendationsIsLoading, className: cls.recommendations, target: "_blank" }, void 0), _jsx(Text, { className: cls.commentTitle, title: t('Комментарии') }, void 0), _jsx(AddCommentForm, { onSendComment: onSendComment }, void 0), _jsx(CommentList, { comments: comments, isLoading: commentsIsLoading }, void 0)] }), void 0) }), void 0));
};
export default memo(ArticleDetailPage);

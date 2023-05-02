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
import Text from 'shared/ui/Text/Text';
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
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
var reducers = {
    articleDetailsComments: articleDetailsCommentsReducer,
};
var ArticleDetailPage = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var id = useParams().id;
    var comments = useSelector(getArticleComments.selectAll);
    var commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    var dispatch = useAppDispatch();
    var navigate = useNavigate();
    var onSendComment = useCallback(function (text) {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    var onBackToList = useCallback(function () {
        navigate(RoutePath.articles);
    }, [navigate]);
    useInitialEffect(function () {
        dispatch(fetchCommentsByArticleId(id));
    });
    if (!id) {
        return (_jsx(Page, __assign({ className: classNames(cls.ArticleDetailPage, {}, [className]) }, { children: t('Статья не найдена') }), void 0));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsxs(Page, __assign({ className: classNames(cls.ArticleDetailPage, {}, [className]) }, { children: [_jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, onClick: onBackToList }, { children: t('Назад к списку') }), void 0), _jsx(ArticleDetails, { id: id }, void 0), _jsx(Text, { className: cls.commentTitle, title: t('Комментарии') }, void 0), _jsx(AddCommentForm, { onSendComment: onSendComment }, void 0), _jsx(CommentList, { comments: comments, isLoading: commentsIsLoading }, void 0)] }), void 0) }), void 0));
};
export default memo(ArticleDetailPage);

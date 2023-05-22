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
import Text from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/addCommentForm';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from 'shared/ui/Stack';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { fetchCommentsByArticleId, } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { fetchArticleRecommendations, } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import cls from '../ArticleDetailsPage/ArticleDetailsPage.module.scss';
export var ArticleDetailsComments = memo(function (props) {
    var className = props.className, id = props.id;
    var t = useTranslation().t;
    var comments = useSelector(getArticleComments.selectAll);
    var commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    var dispatch = useAppDispatch();
    var onSendComment = useCallback(function (text) {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    useInitialEffect(function () {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });
    return (_jsxs(VStack, __assign({ gap: "16", max: true, className: classNames(cls.ArticleDetailsComments, {}, [className]) }, { children: [_jsx(Text, { className: cls.commentTitle, title: t('Комментарии') }, void 0), _jsx(AddCommentForm, { onSendComment: onSendComment }, void 0), _jsx(CommentList, { comments: comments, isLoading: commentsIsLoading }, void 0)] }), void 0));
});

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
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { articlesPageActions, articlesPageReducer, getArticles } from 'pages/ArticlePage/model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView, } from 'pages/ArticlePage/model/selectors/articlesPageSelectors';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticlesList } from 'pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList';
import { ArticleViewSelector } from 'entities/Article/ui/ArticleViewSelector/ArticleViewSelector';
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'shared/ui/Page/Page';
import cls from './ArticlePage.module.scss';
var reducers = {
    articlesPage: articlesPageReducer,
};
var ArticlePage = function (_a) {
    var className = _a.className;
    var t = useTranslation('article').t;
    var dispatch = useAppDispatch();
    var articles = useSelector(getArticles.selectAll);
    var isLoading = useSelector(getArticlesPageIsLoading);
    var view = useSelector(getArticlesPageView);
    var error = useSelector(getArticlesPageError);
    var onChangeView = useCallback(function (view) {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);
    useInitialEffect(function () {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({
            page: 1,
        }));
    });
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers }, { children: _jsxs(Page, __assign({ className: classNames(cls.ArticlePage, {}, [className]) }, { children: [_jsx(ArticleViewSelector, { view: view, onViewClick: onChangeView }, void 0), _jsx(ArticleList, { isLoading: isLoading, view: view, articles: articles }, void 0)] }), void 0) }), void 0));
};
export default memo(ArticlePage);

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
import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { initArticlesPage } from 'pages/ArticlePage/model/services/initArticlesPage/initArticlesPage';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView, } from '../../model/selectors/articlesPageSelectors';
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
    var onLoadNextPart = useCallback(function () {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);
    var searchParams = useSearchParams()[0];
    useInitialEffect(function () {
        dispatch(initArticlesPage(searchParams));
    });
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: false }, { children: _jsx(ArticleList, { isLoading: isLoading, view: view, articles: articles, className: cls.list, onLoadNextPart: onLoadNextPart }, void 0) }), void 0));
};
export default memo(ArticlePage);

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
import { ArticleViewSelector } from 'entities/Article/ui/ArticleViewSelector/ArticleViewSelector';
import { ArticleSortSelector } from 'entities/Article';
import { articlesPageActions } from 'pages/ArticlePage/model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { fetchArticlesList } from 'pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageView, } from '../../model/selectors/articlesPageSelectors';
import cls from './ArticlesPageFilter.module.scss';
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
export var ArticlesPageFilter = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var view = useSelector(getArticlesPageView);
    var sort = useSelector(getArticlesPageSort);
    var order = useSelector(getArticlesPageOrder);
    var search = useSelector(getArticlesPageSearch);
    var onChangeView = useCallback(function (view) {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);
    var fetchData = useCallback(function () {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);
    var debounceFetchData = useDebounce(fetchData, 500);
    var onChangeOrder = useCallback(function (order) {
        dispatch(articlesPageActions.setOrder(order));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch]);
    var onChangeSort = useCallback(function (sort) {
        dispatch(articlesPageActions.setSort(sort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch]);
    var onChangeSearch = useCallback(function (newSearch) {
        dispatch(articlesPageActions.setSearch(newSearch));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch]);
    return (_jsxs("div", __assign({ className: classNames(cls.ArticlesPageFilter, {}, [className]) }, { children: [_jsxs("div", __assign({ className: cls.sortWrapper }, { children: [_jsx(ArticleSortSelector, { sort: sort, order: order, onChangeOrder: onChangeOrder, onChangeSort: onChangeSort }, void 0), _jsx(ArticleViewSelector, { view: view, onViewClick: onChangeView }, void 0)] }), void 0), _jsx(Card, __assign({ className: cls.search }, { children: _jsx(Input, { onChange: onChangeSearch, placeholder: t('Поиск'), value: search }, void 0) }), void 0)] }), void 0));
});

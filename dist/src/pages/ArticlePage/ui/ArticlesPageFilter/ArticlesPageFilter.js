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
import { memo, useCallback, useMemo } from 'react';
import { ArticleViewSelector, ArticleSortSelector, ArticleType, ArticleTypeTabs, } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView, } from '../../model/selectors/articlesPageSelectors';
import cls from './ArticlesPageFilter.module.scss';
export var ArticlesPageFilter = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var view = useSelector(getArticlesPageView);
    var sort = useSelector(getArticlesPageSort);
    var order = useSelector(getArticlesPageOrder);
    var search = useSelector(getArticlesPageSearch);
    var type = useSelector(getArticlesPageType);
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
        debounceFetchData();
    }, [dispatch, debounceFetchData]);
    var onChangeSort = useCallback(function (sort) {
        dispatch(articlesPageActions.setSort(sort));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);
    var onChangeSearch = useCallback(function (newSearch) {
        dispatch(articlesPageActions.setSearch(newSearch));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);
    var onChangeType = useCallback(function (value) {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);
    var typeTabs = useMemo(function () { return [
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.ALL,
            content: t('Все статьи'),
        },
    ]; }, [t]);
    return (_jsxs("div", __assign({ className: classNames(cls.ArticlesPageFilter, {}, [className]) }, { children: [_jsxs("div", __assign({ className: cls.sortWrapper }, { children: [_jsx(ArticleSortSelector, { sort: sort, order: order, onChangeOrder: onChangeOrder, onChangeSort: onChangeSort }, void 0), _jsx(ArticleViewSelector, { view: view, onViewClick: onChangeView }, void 0)] }), void 0), _jsx(Card, __assign({ className: cls.search }, { children: _jsx(Input, { onChange: onChangeSearch, placeholder: t('Поиск'), value: search }, void 0) }), void 0), _jsx(ArticleTypeTabs, { value: type, onChangeType: onChangeType, className: cls.tabs }, void 0)] }), void 0));
});

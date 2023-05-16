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
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView, } from '../../model/selectors/articlesPageSelectors';
import cls from './ArticleInfiniteList.module.scss';
export var ArticleInfiniteList = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var articles = useSelector(getArticles.selectAll);
    var isLoading = useSelector(getArticlesPageIsLoading);
    var view = useSelector(getArticlesPageView);
    var error = useSelector(getArticlesPageError);
    if (error) {
        return (_jsx(Text, { title: t('Ошибка') }, void 0));
    }
    return (_jsx("div", __assign({ className: classNames(cls.ArticleInfiniteList, {}, [className]) }, { children: _jsx(ArticleList, { isLoading: isLoading, view: view, articles: articles, className: cls.list }, void 0) }), void 0));
});

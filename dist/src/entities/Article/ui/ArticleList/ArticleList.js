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
import { memo } from 'react';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleView } from 'entities/Article/model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
var getSkeletons = function (view) { return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map(function (item, index) { return (_jsx(ArticleListItemSkeleton, { className: cls.card, view: view }, index)); }); };
export var ArticleList = memo(function (props) {
    var className = props.className, articles = props.articles, _a = props.view, view = _a === void 0 ? ArticleView.SMALL : _a, isLoading = props.isLoading;
    var t = useTranslation().t;
    var renderArticle = function (article) { return (_jsx(ArticleListItem, { article: article, view: view, className: cls.card }, article.id)); };
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleList, {}, [className, cls[view]]) }, { children: [articles.length > 0
                ? articles.map(renderArticle)
                : null, isLoading && getSkeletons(view)] }), void 0));
});

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
import { memo, useRef, } from 'react';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleView } from 'entities/Article/model/types/article';
import Text from 'shared/ui/Text/Text';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { ArticlesPageFilter } from 'pages/ArticlePage/ui/ArticlesPageFilter/ArticlesPageFilter';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
var getSkeletons = function (view) { return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map(function (item, index) { return (_jsx(ArticleListItemSkeleton, { className: cls.card, view: view }, index)); }); };
export var ArticleList = memo(function (props) {
    var className = props.className, articles = props.articles, _a = props.view, view = _a === void 0 ? ArticleView.SMALL : _a, isLoading = props.isLoading, onLoadNextPart = props.onLoadNextPart, target = props.target;
    var t = useTranslation().t;
    var virtuososGridRef = useRef(null);
    var renderArticle = function (index, article) { return (_jsx(ArticleListItem, { article: article, view: view, className: cls.card, target: target, index: index }, article.id)); };
    var Header = function () { return _jsx(ArticlesPageFilter, {}, void 0); };
    var Footer = memo(function () {
        if (isLoading) {
            return (_jsx("div", __assign({ className: cls.skeleton }, { children: getSkeletons(view) }), void 0));
        }
        return null;
    });
    var ItemContainerComp = function (_a) {
        var height = _a.height, width = _a.width, index = _a.index;
        return (_jsx(ArticleListItemSkeleton, { view: view, className: cls.card }, index));
    };
    if (!isLoading && !articles.length) {
        return (_jsx("div", __assign({ className: classNames(cls.ArticleList, {}, [className, cls[view]]) }, { children: _jsx(Text, { title: t('Статьи не найдены') }, void 0) }), void 0));
    }
    return (_jsx("div", __assign({ className: classNames(cls.ArticleList, {}, [className, cls[view]]) }, { children: view === ArticleView.BIG
            ? (_jsx(Virtuoso, { style: { height: '100%' }, data: articles, itemContent: renderArticle, initialTopMostItemIndex: onLoadNextPart, components: { Header: Header, Footer: Footer } }, void 0)) : (_jsx(VirtuosoGrid, { totalCount: articles.length, data: articles, components: { Header: Header }, endReached: onLoadNextPart }, void 0)) }), void 0));
});

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
import { Text, TextSize } from 'shared/ui/Text/Text';
import { List, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { ArticleView } from '../../model/types/article';
var getSkeletons = function (view) { return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map(function (item, index) { return (_jsx(ArticleListItemSkeleton, { className: cls.card, view: view }, index)); }); };
export var ArticleList = memo(function (props) {
    var className = props.className, articles = props.articles, _a = props.view, view = _a === void 0 ? ArticleView.SMALL : _a, isLoading = props.isLoading, target = props.target;
    var t = useTranslation().t;
    var isBig = view === ArticleView.BIG;
    var itemsPerRow = isBig ? 1 : 3;
    var rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);
    var rowRender = function (_a) {
        var index = _a.index, isScrolling = _a.isScrolling, key = _a.key, style = _a.style;
        var items = [];
        var fromIndex = index * itemsPerRow;
        var toIndex = Math.min(fromIndex + itemsPerRow, articles.length);
        for (var i = fromIndex; i < toIndex; i += 1) {
            items.push(_jsx(ArticleListItem, { article: articles[i], view: view, target: target, className: cls.card }, "str".concat(i)));
        }
        return (_jsx("div", __assign({ style: style, className: cls.row }, { children: items }), key));
    };
    if (!isLoading && !articles.length) {
        return (_jsx("div", __assign({ className: classNames(cls.ArticleList, {}, [className, cls[view]]) }, { children: _jsx(Text, { size: TextSize.L, title: t('Статьи не найдены') }, void 0) }), void 0));
    }
    return (_jsx(WindowScroller, __assign({ scrollElement: document.getElementById(PAGE_ID) }, { children: function (_a) {
            var height = _a.height, width = _a.width, registerChild = _a.registerChild, onChildScroll = _a.onChildScroll, isScrolling = _a.isScrolling, scrollTop = _a.scrollTop;
            return (_jsxs("div", __assign({ ref: registerChild, className: classNames(cls.ArticleList, {}, [className, cls[view]]) }, { children: [_jsx(List, { height: height !== null && height !== void 0 ? height : 700, rowCount: rowCount, rowHeight: isBig ? 700 : 330, rowRenderer: rowRender, width: width ? width - 80 : 700, autoHeight: true, onScroll: onChildScroll, isScrolling: isScrolling, scrollTop: scrollTop }, void 0), isLoading && getSkeletons(view)] }), void 0));
        } }), void 0));
});

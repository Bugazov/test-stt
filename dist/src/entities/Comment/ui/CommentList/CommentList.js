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
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
export var CommentList = memo(function (props) {
    var className = props.className, isLoading = props.isLoading, comments = props.comments;
    var t = useTranslation().t;
    if (isLoading) {
        return (_jsxs("div", __assign({ className: classNames(cls.CommentList, {}, [className]) }, { children: [_jsx(CommentCard, { isLoading: true }, void 0), _jsx(CommentCard, { isLoading: true }, void 0), _jsx(CommentCard, { isLoading: true }, void 0)] }), void 0));
    }
    return (_jsx("div", __assign({ className: classNames(cls.CommentList, {}, [className]) }, { children: (comments === null || comments === void 0 ? void 0 : comments.length)
            ? comments.map(function (comment) { return (_jsx(CommentCard, { isLoading: isLoading, className: cls.comment, comment: comment }, comment.id)); })
            : _jsx(Text, { text: t('Комментарии отсутствуют') }, void 0) }), void 0));
});

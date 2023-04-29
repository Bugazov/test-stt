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
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './CommentCard.module.scss';
export var CommentCard = memo(function (props) {
    var className = props.className, comment = props.comment, isLoading = props.isLoading;
    if (isLoading) {
        return (_jsxs("div", __assign({ className: classNames(cls.CommentCard, {}, [className, cls.loading]) }, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsx(Skeleton, { width: 30, height: 30, border: "50%" }, void 0), _jsx(Skeleton, { height: 16, width: 100, className: cls.username }, void 0)] }), void 0), _jsx(Skeleton, { className: cls.text, width: "100%", height: 50 }, void 0)] }), void 0));
    }
    if (!comment) {
        return null;
    }
    return (_jsxs("div", __assign({ className: classNames(cls.CommentCard, {}, [className]) }, { children: [_jsxs(AppLink, __assign({ to: "".concat(RoutePath.profile).concat(comment.user.id), className: cls.header }, { children: [comment.user.avatar ? _jsx(Avatar, { size: 30, src: comment.user.avatar }, void 0) : null, _jsx(Text, { className: cls.username, title: comment.user.username }, void 0)] }), void 0), _jsx(Text, { className: cls.text, text: comment.text }, void 0)] }), void 0));
});

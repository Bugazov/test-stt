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
import { memo } from 'react';
import cls from './Page.module.scss';
export var Page = memo(function (props) {
    var className = props.className, children = props.children;
    return (_jsx("div", __assign({ className: classNames(cls.Page, {}, [className]) }, { children: children }), void 0));
});

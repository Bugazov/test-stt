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
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useTranslation } from 'react-i18next';
import cls from './SideBarItem.module.scss';
export var SideBarItem = function (_a) {
    var _b;
    var item = _a.item, collapsed = _a.collapsed;
    var t = useTranslation().t;
    var isAuth = useSelector(getUserAuthData);
    if (item.authOnly && !isAuth) {
        return null;
    }
    return (_jsxs(AppLink, __assign({ theme: AppLinkTheme.SECONDARY, to: item.path, className: classNames(cls.item, (_b = {}, _b[cls.collapsed] = collapsed, _b)) }, { children: [_jsx(item.Icon, { className: cls.icon }, void 0), _jsx("span", __assign({ className: cls.link }, { children: t(item.text) }), void 0)] }), void 0));
};
export default SideBarItem;

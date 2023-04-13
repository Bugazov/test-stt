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
import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, getUserAuthData } from 'entities/User';
import cls from './Navbar.module.scss';
export var Navbar = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var dispatch = useDispatch();
    var authdata = useSelector(getUserAuthData);
    var _b = useState(false), isAuthModal = _b[0], setIsAuthModal = _b[1];
    var onCloseModal = useCallback(function () {
        setIsAuthModal(false);
    }, []);
    var onShowModal = useCallback(function () {
        setIsAuthModal(true);
    }, []);
    var onLogout = useCallback(function () {
        dispatch(userActions.logout());
    }, [dispatch]);
    if (authdata) {
        return (_jsx("div", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: _jsx(Button, __assign({ theme: ButtonTheme.CLEAR_INVERTED, className: cls.links, onClick: onLogout }, { children: t('Выйти') }), void 0) }), void 0));
    }
    return (_jsxs("div", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: [_jsx(Button, __assign({ theme: ButtonTheme.CLEAR_INVERTED, className: cls.links, onClick: onShowModal }, { children: t('Войти') }), void 0), isAuthModal && (_jsx(LoginModal, { isOpen: isAuthModal, onClose: onCloseModal }, void 0))] }), void 0));
});

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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import Text from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData, } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';
export var ProfilePageHeader = function (_a) {
    var className = _a.className;
    var t = useTranslation('profile').t;
    var authData = useSelector(getUserAuthData);
    var profileData = useSelector(getProfileData);
    var canEdit = (authData === null || authData === void 0 ? void 0 : authData.id) === (profileData === null || profileData === void 0 ? void 0 : profileData.id);
    var readonly = useSelector(getProfileReadonly);
    var dispatch = useAppDispatch();
    var onEdit = useCallback(function () {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    var onCancelEdit = useCallback(function () {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    var onSave = useCallback(function () {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (_jsxs("div", __assign({ className: classNames(cls.ProfilePageHeader, {}, [className]) }, { children: [_jsx(Text, { title: t('Профиль') }, void 0), canEdit && (_jsx("div", __assign({ className: cls.btnWrapper }, { children: readonly ? (_jsx(Button, __assign({ className: cls.editBtn, theme: ButtonTheme.OUTLINE, onClick: onEdit }, { children: t('Редактировать') }), void 0))
                    : (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ className: cls.editBtn, theme: ButtonTheme.OUTLINE_RED, onClick: onCancelEdit }, { children: t('Отменить') }), void 0), _jsx(Button, __assign({ className: cls.saveBtn, theme: ButtonTheme.OUTLINE, onClick: onSave }, { children: t('Сохранить') }), void 0)] }, void 0)) }), void 0))] }), void 0));
};

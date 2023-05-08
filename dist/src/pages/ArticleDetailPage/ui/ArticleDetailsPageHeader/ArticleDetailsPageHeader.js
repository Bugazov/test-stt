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
import { memo, useCallback } from 'react';
import cls from './ArticleDetailsPageHeader.module.scss';
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
export var ArticleDetailsPageHeader = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var onBackToList = useCallback(function () {
        navigate(RoutePath.articles);
    }, [navigate]);
    return (_jsx("div", __assign({ className: classNames(cls.ArticleDetailsPageHeader, {}, [className]) }, { children: _jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, onClick: onBackToList }, { children: t('Назад к списку') }), void 0) }), void 0));
});

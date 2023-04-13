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
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDspatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading, } from 'entities/Article/model/selectors/articleDetails';
import { TextAlign, Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
var reducers = {
    articleDetails: articleDetailsReducer,
};
export var ArticleDetails = function (_a) {
    var className = _a.className, id = _a.id;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var article = useSelector(getArticleDetailsData);
    var isLoading = useSelector(getArticleDetailsIsLoading);
    var error = useSelector(getArticleDetailsError);
    useEffect(function () {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);
    var content;
    if (isLoading) {
        content = (_jsxs(_Fragment, { children: [_jsx(Skeleton, { className: cls.avatar, width: 200, height: 200, border: "50%" }, void 0), _jsx(Skeleton, { className: cls.title, width: 300, height: 32 }, void 0), _jsx(Skeleton, { className: cls.skeleton, width: 600, height: 24 }, void 0), _jsx(Skeleton, { className: cls.skeleton, width: "100%", height: 200 }, void 0), _jsx(Skeleton, { className: cls.skeleton, width: "100%", height: 200 }, void 0)] }, void 0));
    }
    else if (error) {
        content = (_jsx(Text, { align: TextAlign.CENTER, title: t('Произошла ошибка при загрузке страницы') }, void 0));
    }
    else {
        content = (_jsxs(_Fragment, { children: [_jsx(Avatar, { size: 200, src: article === null || article === void 0 ? void 0 : article.img, className: cls.avatar }, void 0), _jsx(Text, { title: article === null || article === void 0 ? void 0 : article.title, text: article === null || article === void 0 ? void 0 : article.subtitle }, void 0), _jsx("div", {}, void 0)] }, void 0));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsx("div", __assign({ className: classNames(cls.ArticleDetails, {}, [className]) }, { children: content }), void 0) }), void 0));
};

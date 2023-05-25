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
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommedationList } from 'features/articleRecommedationList';
import { ArticleDetailsComments } from '../../ui/ArticleDetailsComments/ArticleDetailsComments';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
var reducers = {
    articleDetailsPage: articleDetailsPageReducer,
};
var ArticleDetailPage = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var id = useParams().id;
    // if (!id) {
    //     return (
    //         <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
    //             {t('Стаья не найдена')}
    //         </Page>
    //     );
    // }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsx(Page, __assign({ className: classNames(cls.ArticleDetailPage, {}, [className]) }, { children: _jsxs(VStack, __assign({ gap: "16", max: true }, { children: [_jsx(ArticleDetailsPageHeader, {}, void 0), _jsx(ArticleDetails, { id: id }, void 0), _jsx(ArticleRecommedationList, {}, void 0), _jsx(ArticleDetailsComments, { id: id }, void 0)] }), void 0) }), void 0) }), void 0));
};
export default memo(ArticleDetailPage);

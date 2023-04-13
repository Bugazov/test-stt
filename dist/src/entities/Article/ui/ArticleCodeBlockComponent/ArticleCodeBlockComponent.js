import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleCodeBlockComponent.module.scss';
export var ArticleCodeBlockComponent = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    return (_jsx("div", { className: classNames(cls.ArticleCodeBlockComponent, {}, [className]) }, void 0));
};

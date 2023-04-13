import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleTextBlockComponent.module.scss';
export var ArticleTextBlockComponent = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    return (_jsx("div", { className: classNames(cls.ArticleTextBlockComponent, {}, [className]) }, void 0));
});

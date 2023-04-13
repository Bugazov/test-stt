import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useMemo } from 'react';
import cls from './Avatar.module.scss';
export var Avatar = function (props) {
    var className = props.className, size = props.size, src = props.src, alt = props.alt;
    var mods = {};
    var styles = useMemo(function () { return ({
        width: size || 100,
        height: size || 100,
    }); }, [size]);
    return (_jsx("img", { src: src, alt: alt, style: styles, className: classNames(cls.Avatar, {}, [className]) }, void 0));
};

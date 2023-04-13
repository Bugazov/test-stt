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
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
export var ProfileCard = function (props) {
    var _a;
    var data = props.data, isLoading = props.isLoading, error = props.error, className = props.className, readonly = props.readonly, onChangeLastname = props.onChangeLastname, onChangeFirstname = props.onChangeFirstname, onChangeAge = props.onChangeAge, onChangeCity = props.onChangeCity, onChangeAvatar = props.onChangeAvatar, onChangeUsername = props.onChangeUsername, onChangeCurrency = props.onChangeCurrency, onChangeCountry = props.onChangeCountry;
    var t = useTranslation('profile').t;
    var mods = (_a = {},
        _a[cls.editing] = !readonly,
        _a);
    if (isLoading) {
        return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, {}, [className, cls.loading]) }, { children: _jsx(Loader, {}, void 0) }), void 0));
    }
    if (error) {
        return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, mods, [className, cls.error]) }, { children: _jsx(Text, { theme: TextTheme.ERROR, title: t('Произошла ошибка при загрузке страницы'), text: t('Попробуйте обновить страницу'), align: TextAlign.CENTER }, void 0) }), void 0));
    }
    return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, mods, [className]) }, { children: _jsxs("div", __assign({ className: cls.data }, { children: [(data === null || data === void 0 ? void 0 : data.avatar) && (_jsx("div", __assign({ className: cls.avatarWrapper }, { children: _jsx(Avatar, { src: data === null || data === void 0 ? void 0 : data.avatar }, void 0) }), void 0)), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.first, placeholder: t('Ваше имя'), className: cls.input, onChange: onChangeFirstname, readonly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.lastname, placeholder: t('Ваша фамилия'), className: cls.input, onChange: onChangeLastname, readonly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.age, placeholder: t('Ваш возраст'), className: cls.input, onChange: onChangeAge, readonly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.city, placeholder: t('Ваш город'), className: cls.input, onChange: onChangeCity, readonly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.username, placeholder: t('Введите имя пользователя'), className: cls.input, onChange: onChangeUsername, readonly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.avatar, placeholder: t('Введите ссылку на аватар'), className: cls.input, onChange: onChangeAvatar, readonly: readonly }, void 0), _jsx(CurrencySelect, { className: cls.input, value: data === null || data === void 0 ? void 0 : data.currency, onChange: onChangeCurrency, readonly: readonly }, void 0), _jsx(CountrySelect, { className: cls.input, value: data === null || data === void 0 ? void 0 : data.country, onChange: onChangeCountry, readonly: readonly }, void 0)] }), void 0) }), void 0));
};

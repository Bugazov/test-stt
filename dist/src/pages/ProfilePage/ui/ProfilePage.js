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
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, getProfileError, getProfileLoading, getProfileReadonly, getProfileValidateErrors, profileActions, ProfileCard, profileReducer, ValidateProfileError, } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { ProfilePageHeader } from '../ui/ProfilePageHeader/ProfilePageHeader';
var reducers = {
    profile: profileReducer,
};
var ProfilePage = function (_a) {
    var _b;
    var className = _a.className;
    var t = useTranslation('profile').t;
    var dispatch = useAppDispatch();
    var dataForm = useSelector(getProfileForm);
    var error = useSelector(getProfileError);
    var readonly = useSelector(getProfileReadonly);
    var isLoading = useSelector(getProfileLoading);
    var validateErrors = useSelector(getProfileValidateErrors);
    var id = useParams().id;
    var validateErrorsTranslates = (_b = {},
        _b[ValidateProfileError.SERVER_ERROR] = t('Серверная ошибка при сохранении'),
        _b[ValidateProfileError.INCORRECT_COUNTRY] = t('Некорректный регион'),
        _b[ValidateProfileError.INCORRECT_USER_DATA] = t('Имя фамилия обязательны'),
        _b[ValidateProfileError.INCORRECT_AGE] = t('Некорректный возраст'),
        _b[ValidateProfileError.NO_DATA] = t('Данные не указаны'),
        _b);
    useInitialEffect(function () {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });
    var onChangeFirstname = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);
    var onChangeLastname = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);
    var onChangeAge = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    }, [dispatch]);
    var onChangeCity = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);
    var onChangeAvatar = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);
    var onChangeUsername = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);
    var onChangeCurrency = useCallback(function (currency) {
        dispatch(profileActions.updateProfile({ currency: currency }));
    }, [dispatch]);
    var onChangeCountry = useCallback(function (country) {
        dispatch(profileActions.updateProfile({ country: country }));
    }, [dispatch]);
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsxs("div", __assign({ className: classNames('', {}, [className]) }, { children: [_jsx(ProfilePageHeader, {}, void 0), (validateErrors === null || validateErrors === void 0 ? void 0 : validateErrors.length) && validateErrors.map(function (err) { return (_jsx(Text, { theme: TextTheme.ERROR, text: validateErrorsTranslates[err] }, err)); }), _jsx(ProfileCard, { data: dataForm, error: error, isLoading: isLoading, onChangeFirstname: onChangeFirstname, onChangeLastname: onChangeLastname, readonly: readonly, onChangeCity: onChangeCity, onChangeAge: onChangeAge, onChangeUsername: onChangeUsername, onChangeAvatar: onChangeAvatar, onChangeCurrency: onChangeCurrency, onChangeCountry: onChangeCountry }, void 0)] }), void 0) }), void 0));
};
export default ProfilePage;

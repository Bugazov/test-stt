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
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { ProfileCard } from 'entities/Profile';
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import { ValidateProfileError } from '../../const/const';
import { getProfileValidateErrors, } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import cls from './EditableProfileCard.module.scss';
import { EditableProfileCardHeader, } from '../../ui/EditableProfileCardHeader/EditableProfileCardHeader';
var reducers = {
    profile: profileReducer,
};
export var EditableProfileCard = memo(function (props) {
    var _a;
    var className = props.className, id = props.id;
    var t = useTranslation('profile').t;
    var dispatch = useAppDispatch();
    var dataForm = useSelector(getProfileForm);
    var error = useSelector(getProfileError);
    var readonly = useSelector(getProfileReadonly);
    var isLoading = useSelector(getProfileLoading);
    var validateErrors = useSelector(getProfileValidateErrors);
    var validateErrorsTranslates = (_a = {},
        _a[ValidateProfileError.SERVER_ERROR] = t('Серверная ошибка при сохранении'),
        _a[ValidateProfileError.INCORRECT_COUNTRY] = t('Некорректный регион'),
        _a[ValidateProfileError.INCORRECT_USER_DATA] = t('Имя фамилия обязательны'),
        _a[ValidateProfileError.INCORRECT_AGE] = t('Некорректный возраст'),
        _a[ValidateProfileError.NO_DATA] = t('Данные не указаны'),
        _a);
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
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsxs(VStack, __assign({ className: classNames(cls.EditableProfileCard, {}, [className]), gap: "8", max: true }, { children: [_jsx(EditableProfileCardHeader, {}, void 0), (validateErrors === null || validateErrors === void 0 ? void 0 : validateErrors.length) && validateErrors.map(function (err) { return (_jsx(Text, { theme: TextTheme.ERROR, text: validateErrorsTranslates[err], "data-testid": "EditableProfileCard.Error" }, err)); }), _jsx(ProfileCard, { data: dataForm, error: error, isLoading: isLoading, onChangeFirstname: onChangeFirstname, onChangeLastname: onChangeLastname, readonly: readonly, onChangeCity: onChangeCity, onChangeAge: onChangeAge, onChangeUsername: onChangeUsername, onChangeAvatar: onChangeAvatar, onChangeCurrency: onChangeCurrency, onChangeCountry: onChangeCountry }, void 0)] }), void 0) }), void 0));
});

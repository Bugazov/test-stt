import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/Popups';
import { Currency } from '../../model/types/currency';
var options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
];
export var CurrencySelect = memo(function (props) {
    var className = props.className, value = props.value, onChange = props.onChange, readonly = props.readonly;
    var t = useTranslation().t;
    var onChangeHandler = useCallback(function (value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (_jsx(ListBox, { onChange: onChangeHandler, value: value, readonly: readonly, items: options, label: t('Укажите валюту') }, void 0));
    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label={t('Укажите валюту')}
    //         options={options}
    //         onChange={onChangeHandler}
    //         value={value}
    //         readonly={readonly}
    //
    //     />
    // );
});

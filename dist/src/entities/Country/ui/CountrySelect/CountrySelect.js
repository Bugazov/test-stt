import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';
var options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];
export var CountrySelect = memo(function (props) {
    var className = props.className, value = props.value, onChange = props.onChange, readonly = props.readonly;
    var t = useTranslation().t;
    var onChangeHandler = useCallback(function (value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (_jsx(ListBox, { onChange: onChangeHandler, value: value, readonly: readonly, items: options, label: t('Укажите страну') }, void 0));
    //
    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label={t('Укажите страну')}
    //         options={options}
    //         onChange={onChangeHandler}
    //         value={value}
    //         readonly={readonly}
    //
    //     />
    // );
});

import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?:string,
    onChange?:(value:Country)=> void,
    readonly?:boolean
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
            items={options}
            label={t('Укажите страну')}
        />
    );
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

import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import Text, { TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { CountrySelect, Country } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?:Profile,
    error?:string,
    isLoading?:boolean,
    readonly?:boolean
    onChangeFirstname?:(value:string)=> void,
    onChangeLastname?:(value:string)=> void
    onChangeCity?:(value:string)=> void,
    onChangeAge?:(value:string)=> void,
    onChangeUsername?:(value:string)=> void,
    onChangeAvatar?:(value:string)=> void
    onChangeCurrency?:(currency:Currency)=> void,
    onChangeCountry?:(country:Country)=> void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        data,
        isLoading,
        error,
        className,
        readonly,
        onChangeLastname,
        onChangeFirstname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    const mods:Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, mods, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке страницы')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}

                />
            </HStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames(cls.ProfileCard, mods, [className])}>

            {data?.avatar && (
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('Ваш город')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />

            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />

        </VStack>
    );
};

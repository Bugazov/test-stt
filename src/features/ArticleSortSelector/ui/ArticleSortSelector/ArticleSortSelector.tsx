import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOptions } from '@/shared/ui/Select/Select';
import { SortOrder } from '@/shared/types/sortOrder';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';

interface ArticleSortSelectorProps {
    className?: string;
    order:SortOrder;
    sort:ArticleSortField;
    onChangeSort:(newSort:ArticleSortField)=> void;
    onChangeOrder:(newOrder:SortOrder)=> void;

}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, order, onChangeOrder, onChangeSort, sort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [

        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },

    ], [t]);

    const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [

        {
            value: ArticleSortField.CREATE,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('заголовку'),
        },

    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('Сортировать по')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}

            />
        </div>
    );
});

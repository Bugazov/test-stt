import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
    ArticleViewSelector,
    ArticleView, ArticleSortSelector, ArticleSortField, ArticleType, ArticleTypeTabs,
} from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';
import { SortOrder } from '@/shared/types/sortOrder';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort, getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import cls from './ArticlesPageFilter.module.scss';

interface ArticlesPageFilterProps {
    className?: string;
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setOrder(order));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sort));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    const onChangeSearch = useCallback((newSearch: string) => {
        dispatch(articlesPageActions.setSearch(newSearch));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    const onChangeType = useCallback((value:ArticleType) => {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.ALL,
            content: t('Все статьи'),
        },

    ], [t]);

    return (
        <div className={classNames(cls.ArticlesPageFilter, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                    value={search}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />

        </div>
    );
});

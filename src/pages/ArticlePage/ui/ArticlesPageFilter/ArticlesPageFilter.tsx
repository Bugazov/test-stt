import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleViewSelector } from 'entities/Article/ui/ArticleViewSelector/ArticleViewSelector';
import { ArticleView, ArticleSortSelector, ArticleSortField } from 'entities/Article';
import { articlesPageActions } from 'pages/ArticlePage/model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types/sortOrder';
import {
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort,
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

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setOrder(order));
    }, [dispatch]);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sort));
    }, [dispatch]);

    const onChangeSearch = useCallback((newSearch: string) => {
        dispatch(articlesPageActions.setSearch(newSearch));
    }, [dispatch]);

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

        </div>
    );
});

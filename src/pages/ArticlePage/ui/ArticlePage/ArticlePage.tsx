import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { ArticleView } from 'entities/Article/model/types/article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

import { ArticleViewSelector } from 'entities/Article/ui/ArticleViewSelector/ArticleViewSelector';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'shared/ui/Page/Page';
import { initArticlesPage } from 'pages/ArticlePage/model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageError, getArticlesPageHasMore,
    getArticlesPageIsLoading, getArticlesPagePage,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string;
}
const reducers:ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlePage = ({ className }: ArticlePageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const page = useSelector(getArticlesPagePage);
    const hasMore = useSelector(getArticlesPageHasMore);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlePage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);

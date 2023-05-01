import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types/sortOrder';
import { ArticleSortField } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    limit:number,
    hasMore: boolean,
    page:number,
    view: ArticleView;
    order:SortOrder
    sort:ArticleSortField
    search:string
    _inited: boolean
}

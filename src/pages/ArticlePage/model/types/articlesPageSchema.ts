import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleView, ArticleSortField, ArticleType,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types/sortOrder';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    limit:number,
    hasMore: boolean,
    page:number,
    view: ArticleView;
    order:SortOrder
    sort:ArticleSortField,
    type:ArticleType,
    search:string
    _inited: boolean
}

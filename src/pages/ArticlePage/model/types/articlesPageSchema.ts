import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    limit?:number,
    hasMore: boolean,
    page:number,
    view: ArticleView;
    _inited: boolean
}

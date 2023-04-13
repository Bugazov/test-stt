import { lazy } from 'react';

export const ArticlePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    resolve(import('./ArticlePage'));
}));

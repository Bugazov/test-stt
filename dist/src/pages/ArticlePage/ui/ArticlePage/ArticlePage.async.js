import { lazy } from 'react';
export var ArticlePageAsync = lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    resolve(import('./ArticlePage'));
}); });

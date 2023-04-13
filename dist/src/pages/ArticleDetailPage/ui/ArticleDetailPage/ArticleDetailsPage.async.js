import { lazy } from 'react';
export var ArticleDetailsPageAsync = lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    resolve(import('./ArticleDetailsPage'));
}); });

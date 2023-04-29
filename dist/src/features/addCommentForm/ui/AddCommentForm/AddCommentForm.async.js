import { lazy } from 'react';
export var AddCommentFormAsync = lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    resolve(import('./AddCommentForm'));
}); });

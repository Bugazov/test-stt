import { lazy } from 'react';
export var MainPageAsync = lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    resolve(import('./MainPage'));
}); });

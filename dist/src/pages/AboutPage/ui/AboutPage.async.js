import { lazy } from 'react';
export var AboutPageAsync = lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    resolve(import('./AboutPage'));
}); });

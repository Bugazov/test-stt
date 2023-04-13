import { lazy } from 'react';
export var ProfilePageAsync = lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    resolve(import('./ProfilePage'));
}); });

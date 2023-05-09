import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
export var $api = axios.create({
    baseURL: __API__,
});
$api.interceptors.request.use(function (confg) {
    if (confg.headers) {
        confg.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }
    return confg;
});

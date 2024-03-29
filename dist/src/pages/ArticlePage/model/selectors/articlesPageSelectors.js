import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';
export var getArticlesPageIsLoading = function (state) { var _a; return ((_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.isLoading) || false; };
export var getArticlesPageError = function (state) { var _a; return (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.error; };
export var getArticlesPageView = function (state) { var _a; return ((_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.view) || ArticleView.SMALL; };
export var getArticlesPageLimit = function (state) { var _a; return ((_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.limit) || 9; };
export var getArticlesPagePage = function (state) { var _a; return ((_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.page) || 1; };
export var getArticlesPageHasMore = function (state) { var _a; return (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.hasMore; };
export var getArticlesPageInited = function (state) { var _a; return (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a._inited; };
export var getArticlesPageSort = function (state) { var _a; return ((_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.sort) || ArticleSortField.TITLE; };
export var getArticlesPageOrder = function (state) { var _a; return ((_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.order) || 'asc'; };
export var getArticlesPageSearch = function (state) { var _a, _b; return (_b = (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.search) !== null && _b !== void 0 ? _b : ''; };
export var getArticlesPageType = function (state) { var _a, _b; return (_b = (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : ArticleType.ALL; };

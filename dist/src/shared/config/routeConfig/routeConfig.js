var _a, _b;
import { jsx as _jsx } from "react/jsx-runtime";
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlePage } from 'pages/ArticlePage';
import { ArticleDetailsPage } from 'pages/ArticleDetailPage';
import ArticleEditPage from 'pages/ArticleEditPage/ui/ArticleEditPage/ArticleEditPage';
import { AdminPanelPage } from 'pages/AdminPanelPage';
import { UserRole } from 'entities/User/model/types/user';
import { ForbiddenPage } from 'pages/ForbiddenPage';
export var AppRoutes;
(function (AppRoutes) {
    AppRoutes["MAIN"] = "main";
    AppRoutes["ABOUT"] = "about";
    AppRoutes["NOT_FOUND"] = "not_found";
    AppRoutes["PROFILE"] = "profile";
    AppRoutes["ARTICLES"] = "articles";
    AppRoutes["ARTICLES_DETAILS"] = "articles_details";
    AppRoutes["ARTICLE_EDIT"] = "article_edit";
    AppRoutes["ARTICLE_CREATE"] = "article_create";
    AppRoutes["ADMIN_PANEL"] = "admin_panel";
    AppRoutes["FORBIDDEN"] = "forbidden";
})(AppRoutes || (AppRoutes = {}));
export var RoutePath = (_a = {},
    _a[AppRoutes.MAIN] = '/',
    _a[AppRoutes.ABOUT] = '/about',
    _a[AppRoutes.PROFILE] = '/profile/',
    _a[AppRoutes.ARTICLES] = '/articles',
    _a[AppRoutes.ARTICLES_DETAILS] = '/articles/',
    _a[AppRoutes.ARTICLE_EDIT] = '/articles/:id/edit',
    _a[AppRoutes.ARTICLE_CREATE] = '/articles/new',
    _a[AppRoutes.ADMIN_PANEL] = '/admin',
    _a[AppRoutes.FORBIDDEN] = '/forbidden',
    // последний
    _a[AppRoutes.NOT_FOUND] = '*',
    _a);
export var routeConfig = (_b = {},
    _b[AppRoutes.MAIN] = {
        path: RoutePath.main,
        element: _jsx(MainPage, {}, void 0),
    },
    _b[AppRoutes.ABOUT] = {
        path: RoutePath.about,
        element: _jsx(AboutPage, {}, void 0),
    },
    _b[AppRoutes.NOT_FOUND] = {
        path: RoutePath.not_found,
        element: _jsx(NotFoundPage, {}, void 0),
    },
    _b[AppRoutes.PROFILE] = {
        path: "".concat(RoutePath.profile, ":id"),
        element: _jsx(ProfilePage, {}, void 0),
        authOnly: true,
    },
    _b[AppRoutes.ARTICLES] = {
        path: RoutePath.articles,
        element: _jsx(ArticlePage, {}, void 0),
        authOnly: true,
    },
    _b[AppRoutes.ARTICLES_DETAILS] = {
        path: "".concat(RoutePath.articles_details, ":id"),
        element: _jsx(ArticleDetailsPage, {}, void 0),
        authOnly: true,
    },
    _b[AppRoutes.ADMIN_PANEL] = {
        path: "".concat(RoutePath.admin_panel),
        element: _jsx(AdminPanelPage, {}, void 0),
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    _b[AppRoutes.ARTICLE_CREATE] = {
        path: "".concat(RoutePath.article_create),
        element: _jsx(ArticleEditPage, {}, void 0),
        authOnly: true,
    },
    _b[AppRoutes.ARTICLE_EDIT] = {
        path: "".concat(RoutePath.article_edit),
        element: _jsx(ArticleEditPage, {}, void 0),
        authOnly: true,
    },
    _b[AppRoutes.FORBIDDEN] = {
        path: "".concat(RoutePath.forbidden),
        element: _jsx(ForbiddenPage, {}, void 0),
    },
    _b);

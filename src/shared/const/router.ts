export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLES_DETAILS = 'articles_details',
    ARTICLE_EDIT = 'article_edit',
    ARTICLE_CREATE = 'article_create',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLES_DETAILS]: '/articles/',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    // последний
    [AppRoutes.NOT_FOUND]: '*',

};
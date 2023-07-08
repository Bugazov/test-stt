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

export const getRouteAbout = ()=> '/about'
export const getRouteMain = ()=> '/'
export const getRouteProfile = (id:string)=> `/profile/${id}`
export const getRouteArticles = ()=> '/articles'
export const getRouteArticlesDetails = (id:string)=> `/articles/${id}`
export const getRouteArticleEdit = (id:string)=> `/articles/${id}/edit`
export const getRouteArticleCreate = ()=> '/articles/new'
export const getRouteAdminPanel = ()=> '/admin'
export const getRouteForbiden = ()=> '/forbidden'



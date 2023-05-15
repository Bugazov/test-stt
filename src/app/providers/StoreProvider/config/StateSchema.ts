import {
    ReducersMapObject, AnyAction, Reducer, CombinedState, EnhancedStore,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { loginSchema } from 'features/AuthByUsername';
import { NavigateOptions, To } from 'react-router-dom';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsCommentsSchema, ArticleDetailsPageSchema } from 'pages/ArticleDetailPage';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlePage';
import { ScrollSaveSchema } from 'features/ScrollSave';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scrollSave:ScrollSaveSchema,
    [rtkApi.reducerPath]:ReturnType<typeof rtkApi.reducer>
    // Асинхронные редюсеры
    loginForm?: loginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>
export interface ReducerManager {
    getReducerMap:()=> ReducersMapObject<StateSchema>,
    reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>,
    add:(key:StateSchemaKey, reducer:Reducer)=>void,
    remove:(key:StateSchemaKey)=> void

    getMountedReducers:()=> MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager:ReducerManager
}

export interface ThunkExtraArg{
    api:AxiosInstance,

}

export interface ThunkConfig<T>{
    rejectValue: T,
    extra:ThunkExtraArg,
    state:StateSchema

}

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
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailPage';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlePage/model/types/articlesPageSchema';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    loginForm?: loginSchema,
    profile?:ProfileSchema,
    articleDetails?:ArticleDetailsSchema,
    articleDetailsComments?:ArticleDetailsCommentsSchema,
    addCommentForm?:AddCommentFormSchema,
    articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap:()=> ReducersMapObject<StateSchema>,
    reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>,
    add:(key:StateSchemaKey, reducer:Reducer)=>void,
    remove:(key:StateSchemaKey)=> void
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

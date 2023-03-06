import { ReducersMapObject, AnyAction, Reducer, CombinedState, EnhancedStore } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { loginSchema } from 'features/AuthByUsername';



export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: loginSchema
}


export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap:()=> ReducersMapObject<StateSchema>,
    reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>,
    add:(key:StateSchemaKey,reducer:Reducer)=>void,
    remove:(key:StateSchemaKey)=> void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager:ReducerManager
}
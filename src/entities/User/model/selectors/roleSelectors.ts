import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '../../model/types/user';

export const getUserRoles = (state:StateSchema) => state.user.authData?.roles;

export const inUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const inUserManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));

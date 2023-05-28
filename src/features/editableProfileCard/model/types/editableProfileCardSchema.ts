import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../const/const';

export interface ProfileSchema {
    data?: Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    form?: Profile,
    validateErrors?: ValidateProfileError[]
}

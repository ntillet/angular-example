import { createAction, props } from '@ngrx/store';
import { IUser } from '../../models/users.model';

export const LOAD_USER_LIST = '[USERS] Load User List';
export const LOAD_USER_LIST_SUCCESS = '[USERS] Load User List Success';

export const loadUserListAction = createAction(
    LOAD_USER_LIST,
)

export const loadUserListSuccessAction = createAction(
    LOAD_USER_LIST_SUCCESS,
    props<{ payload: IUser[] }>(),
)
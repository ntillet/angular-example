import { createAction, props } from '@ngrx/store';
import { User } from '../../models/users.model';

export const LOAD_USER_LIST = '[USERS] Load User List';
export const LOAD_USER_LIST_SUCCESS = '[USERS] Load User List Success';
export const SAVE_USER = '[USERS] Save User';
export const SAVE_USER_SUCCESS = '[USERS] Save User Success';
export const DELETE_USER = '[USERS] Delete User';
export const DELETE_USER_SUCCESS = '[USERS] Delete User Success';

export const loadUserListAction = createAction(
    LOAD_USER_LIST,
)

export const loadUserListSuccessAction = createAction(
    LOAD_USER_LIST_SUCCESS,
    props<{ payload: User[] }>(),
)

export const updateUserAction = createAction(
    SAVE_USER,
    props<{ payload: User }>(),
)

export const updateUserSuccessAction = createAction(
    SAVE_USER_SUCCESS,
    props<{ payload: User }>(),
)

export const deleteUserAction = createAction(
    DELETE_USER,
    props<{ payload: string }>(),
)

export const deleteUserSuccessAction = createAction(
    DELETE_USER_SUCCESS,
    props<{ payload: string }>(),
)
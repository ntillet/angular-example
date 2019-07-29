import { Action } from '@ngrx/store';
import { IUserList, IUser } from '../../models/users.model';

export const LOAD_USER_LIST = '[PROJECT] Load User List';
export const LOAD_USER_LIST_SUCCESS = '[PROJECT] Load User List Success';
export const SELECT_USER = '[PROJECT] Select User';

export class LoadUserListAction implements Action {
    readonly type = LOAD_USER_LIST;
    constructor() { }
}

export class LoadUserListSuccessAction implements Action {
    readonly type = LOAD_USER_LIST_SUCCESS;
    constructor(public payload: IUserList) { }
}

export class SelectUserAction implements Action {
    readonly type = SELECT_USER;
    constructor(public payload: IUser) { }
}

export type Actions
    = LoadUserListAction
    | LoadUserListSuccessAction
    | SelectUserAction;

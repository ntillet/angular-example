import * as UserActions from '../actions/users.action';
import { IUser } from '../../models/users.model';

export interface UsersState {
    userList: IUser[];
    error?: any;
}

export const initialState: UsersState = {
    userList: null,
    error: null
};

export const getUserList = (state: UsersState) => state.userList;

export function UsersReducer(state = initialState, action): UsersState {
    switch (action.type) {
        case UserActions.LOAD_USER_LIST_SUCCESS: {
            return Object.assign({}, state, {
                userList: action.payload
            });
        }
        default: { return state; }
    }
}
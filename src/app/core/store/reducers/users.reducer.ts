import * as UserActions from '../actions/users.action';
import { User } from '../../models/users.model';

export interface UsersState {
    userList: User[];
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
        case UserActions.SAVE_USER_SUCCESS: {
            return Object.assign({}, state, {
                // userList: action.payload
            });
        }
        case UserActions.DELETE_USER_SUCCESS: {
            const index = state.userList.findIndex(user => user.login.username === action.payload);
            return Object.assign({}, state, {
                userList: [
                    ...state.userList.slice(0, index),
                    ...state.userList.slice(index + 1)
                ],
            });
        }
        default: { return state; }
    }
}
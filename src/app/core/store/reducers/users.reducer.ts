import * as UserActions from '../actions/users.action';
import { IUser, IUserList } from '../../models/users.model';

export interface UsersState {
    userList: IUserList;
    selectedUser: IUser;
    error?: any;
}

export const initialState: UsersState = {
    userList: null,
    selectedUser: null,
    error: null
};

export const getUserList = (state: UsersState) => state.userList;
export const getSelectedUser = (state: UsersState) => state.selectedUser;

export function UsersReducer(state = initialState, action: UserActions.Actions): UsersState {
    switch (action.type) {
        case UserActions.LOAD_USER_LIST_SUCCESS: {
            return Object.assign({}, state, {
                userList: action.payload
            });
        }
        case UserActions.SELECT_USER: {
            return Object.assign({}, state, {
                selectedUser: action.payload
            });
        }
        default: { return state; }
    }
}


import { createSelector } from 'reselect';
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as fromUsers from '../store/reducers/users.reducer';

export interface State {
    users: fromUsers.UsersState;
}

export const reducers: ActionReducerMap<State> = {
    users: fromUsers.UsersReducer
};

export const metaReducers: MetaReducer<State>[] = []; // store-freeze is a good practice

export const getUserState = (state: State) => state.users;

// User Selectors
export const getConcept = createSelector(getUserState, fromUsers.getUserList);
export const getChildren = createSelector(getUserState, fromUsers.getSelectedUser);
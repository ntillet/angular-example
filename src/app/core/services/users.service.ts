import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as UsersActions from '../../core/store/actions/users.action';
import * as fromRoot from '../../core/store';
import { User } from '../models/users.model';


@Injectable()
export class UsersService {
    constructor(
        protected store: Store<fromRoot.State>
    ) { }

    fetchUserList(): Observable<User[]> {
        return this.store.select(fromRoot.getUserList);
    }

    loadUserList(): void {
        this.store.dispatch(UsersActions.loadUserListAction());
    }

    saveUser(user: User): void {
        this.store.dispatch(UsersActions.updateUserAction({ payload: user }));
    }

    deleteUser(username: string): void {
        this.store.dispatch(UsersActions.deleteUserAction({ payload: username }));
    }
}

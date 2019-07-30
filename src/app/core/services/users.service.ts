import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as UsersActions from '../../core/store/actions/users.action';
import * as fromRoot from '../../core/store';
import { IUser } from '../models/users.model';


@Injectable()
export class UsersService {
    constructor(
        protected store: Store<fromRoot.State>
    ) { }

    fetchUserList(): Observable<IUser[]> {
        return this.store.select(fromRoot.getUserList);
    }

    loadUserList(): void {
        this.store.dispatch(new UsersActions.LoadUserListAction());
    }
}

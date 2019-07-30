import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as UsersActions from '../../../core/store/actions/users.action';
import { UsersHttpService } from '../../services/http/users-http.service';

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private usersHttpService: UsersHttpService,
    ) { }

    @Effect()
    loadUserList$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType<UsersActions.LoadUserListAction>(UsersActions.LOAD_USER_LIST),
            switchMap(() => {
                return this.usersHttpService.getUsers(500).pipe(
                    map((userList) => {
                        return new UsersActions.LoadUserListSuccessAction(userList);
                    })
                );
            })
        )
    );
}

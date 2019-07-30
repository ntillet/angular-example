import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as UsersActions from '../../../core/store/actions/users.action';
import { UsersHttpService } from '../../services/http/users-http.service';

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private usersHttpService: UsersHttpService,
    ) { }

    loadUserList$ = createEffect(
        () => this.actions$.pipe(
            ofType(UsersActions.LOAD_USER_LIST),
            switchMap(() => {
                return this.usersHttpService.getUsers(500).pipe(
                    map((userList) => {
                        return UsersActions.loadUserListSuccessAction({ payload: userList });
                    })
                );
            })
        )
    );
}

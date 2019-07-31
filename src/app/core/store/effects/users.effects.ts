import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as UsersActions from '../../../core/store/actions/users.action';
import { UsersHttpService } from '../../services/http/users-http.service';
import { User } from '../../models/users.model';

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private usersHttpService: UsersHttpService,
    ) { }

    loadUserList$ = createEffect(
        () => this.actions$.pipe(
            ofType(UsersActions.loadUserListAction),
            switchMap(() => {
                return this.usersHttpService.getUsers(500).pipe(
                    map((userList) => {
                        const userTyped: User[] = [];
                        userList.forEach(u => userTyped.push(new User(u)));
                        return UsersActions.loadUserListSuccessAction({ payload: userTyped });
                    })
                );
            })
        )
    );

    updateUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(UsersActions.updateUserAction),
            map(action => action.payload),
            switchMap((user) => {
                return this.usersHttpService.updateUser(user).pipe(
                    map(_ => UsersActions.updateUserSuccessAction({ payload: user }))
                );
            })
        )
    );

    deleteUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(UsersActions.deleteUserAction),
            map(action => action.payload),
            switchMap((username: string) => {
                return this.usersHttpService.deleteUser(username).pipe(
                    map(_ => UsersActions.deleteUserSuccessAction({ payload: username }))
                );
            })
        )
    );
}

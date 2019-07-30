import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users.component';

// import { UserExistsGuard } from '@example-app/user/guards';

export const routes: Routes = [{
    path: '', component: UsersComponent,
    children: [
        { path: 'userlist', component: UserListComponent, pathMatch: 'full' },
        { path: ':id', component: UserDetailComponent/*, canActivate: [UserExistsGuard] */ },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule { }

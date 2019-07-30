import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

// Won't implement it but it's a good idea to have guards
// import { UserExistsGuard } from '@usersapp/user/guards';

export const routes: Routes = [
    { path: 'list', component: UserListComponent },
    { path: ':username', component: UserDetailComponent/*, canActivate: [UserExistsGuard] */ },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule { }

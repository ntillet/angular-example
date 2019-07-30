import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { UsersComponent } from './users.component';
import { UsersService } from 'src/app/core/services/users.service';

@NgModule({
    imports: [
        UsersRoutingModule,
        CommonModule,
        MaterialModule
    ],
    declarations: [
        UsersComponent,
        UserListComponent,
        UserListItemComponent,
        UserDetailComponent
    ],
    providers: [
        UsersService
    ]
})
export class BranchesModule {}

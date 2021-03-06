import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { UsersService } from 'src/app/core/services/users.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        UsersRoutingModule,
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        UserListComponent,
        UserDetailComponent
    ],
    providers: [
        UsersService
    ]
})
export class UsersModule {}

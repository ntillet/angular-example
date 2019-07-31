import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { UsersService } from 'src/app/core/services/users.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'src/app/core/store';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTableDataSource } from '@angular/material';
import { mockUsers } from 'src/app/testing/mocks/users.mock';

describe('UserListComponent', () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                UserListComponent
            ],
            imports: [
                MaterialModule,
                StoreModule.forRoot(reducers, { metaReducers }),
                RouterTestingModule.withRoutes([]),
            ],
            providers: [
                // Should use mocks, but in this case I won't use it, there's no need
                UsersService
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;
    }));

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should find the oldest', () => {
        component.userListDS = new MatTableDataSource(mockUsers);
        component.showOlderUser();
        expect(component.olderUsername).toBe('OLDERUSERNAME');
    });
});

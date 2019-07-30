import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/effects/users.effects';
import { UsersHttpService } from './services/http/users-http.service';

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([
            UsersEffects
        ])
    ],
    providers: [
        UsersHttpService
    ]
})
export class CoreModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core/store';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        StoreModule.forRoot(reducers, { metaReducers }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

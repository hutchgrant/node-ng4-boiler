import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import { AuthenticationComponent } from "./auth/authentication.component";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        SharedModule,
        AuthModule,
        CoreModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
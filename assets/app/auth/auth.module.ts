import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { LogoutComponent } from "./logout.component";
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { authRouting } from "./auth.routing";
import { User } from "./user.model";
import { userReducer } from "./user.reducer";

@NgModule({
    declarations:[
        LogoutComponent,
        SigninComponent,
        SignupComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        authRouting,
        StoreModule.forRoot({ user: userReducer })
    ]
})
export class AuthModule{

}
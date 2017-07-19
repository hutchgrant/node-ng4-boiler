import { Component, Input, OnInit } from "@angular/core";

import { AuthService } from './../../auth/auth.service';
import { User } from './../../auth/user.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    @Input() full = false;
    isLoggedIn = false;
    user : User;
    isMobile = false;

    constructor(private authService: AuthService) {
        this.isLoggedIn = this.authService.isLoggedIn();
        this.authService.getUser()
        .subscribe(user => {
            this.user = user;
            if(this.user !== undefined){
                if(this.user.token !== undefined){
                   this.isLoggedIn = true;
                }else{
                    this.isLoggedIn = false;
                }
            }
        });
    }
    ngOnInit() {
    
    }

    toggleMobile() {
        let bool = this.isMobile;
        this.isMobile = bool === false ? true : false; 
    }
}
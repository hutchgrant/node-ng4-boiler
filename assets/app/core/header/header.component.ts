import { Component, Input, OnInit, DoCheck } from "@angular/core";

import { AuthService } from './../../auth/auth.service';
import { User } from './../../auth/user.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, DoCheck {
    @Input() full = false;
    isLoggedIn = false;
    user = new User();
    isMobile = false;

    constructor(private authService: AuthService) {}
    ngOnInit() {
    
    }
    ngDoCheck(){
        this.isLoggedIn = this.authService.isLoggedIn();
        if(this.isLoggedIn){
            this.user = this.authService.getUser();
        }
    } 
    toggleMobile() {
        let bool = this.isMobile;
        this.isMobile = bool === false ? true : false; 
    }

}
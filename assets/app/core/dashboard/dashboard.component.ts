import { Component, Input, OnInit } from "@angular/core";

import { AuthService } from './../../auth/auth.service';
import { User } from '../../auth/user.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    user = new User();

    constructor(private authService: AuthService) {}
    ngOnInit() {
      this.user = this.authService.getUser();
    }
}
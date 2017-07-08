import { Router } from '@angular/router';
import { Component, Output, OnInit, DoCheck } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [ require('../../sass/_base.scss').toString() ]
})
export class AppComponent implements OnInit, DoCheck {
    @Output() full = false;

    constructor(private route:Router){}

    ngOnInit() {

    }
    ngDoCheck() {
        let current: string = this.route.url;
        if (current.indexOf("auth") >= 0 ||
            current.indexOf("dashboard") >= 0 ) {
            this.full = true;
        }else{
            this.full = false;
        }
    }
}
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { User } from "./user.model"
import { ErrorService } from "../errors/error.service"

interface UserState {
  user: User;
}

const headers = new Headers({'Content-Type': 'application/json'});

@Injectable()
export class AuthService {

    user: Observable<User>;

    constructor(private http: Http, 
                private errorService: ErrorService,
                private store: Store<UserState>) {
                    this.user = store.select('user');
                }

    signup(user: User){
        const body = JSON.stringify(user);
        return this.http.post('/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            }) 
    }

    signin(user: User){
        const body = JSON.stringify(user);
        return this.http.post('/user/signin', body, {headers: headers})
            .map((response: Response) => {
                this.store.dispatch({type: 'ADD_USER', payload: response.json()});
                this.isLoggedIn();
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })
    }

    logout(){
        this.store.dispatch({type: 'LOGOUT', payload: {}});
    }

    isLoggedIn(){
        if(localStorage.getItem('token') !== null){
           this.store.dispatch({type: 'INIT_USER', payload: ''});
           return true;    
        }
        return false;
    }

    getUser(){
        return this.user;
    }
}
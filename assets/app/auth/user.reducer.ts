import { Action } from '@ngrx/store';
import * as _ from 'lodash';

import { User } from './user.model';

export function userReducer(state: User, {type, payload}) {
	switch (type) {
        case 'ADD_USER':
            localStorage.setItem('token', payload.token);
            localStorage.setItem('userId', payload.userId);
            localStorage.setItem('firstName', payload.firstName);
            localStorage.setItem('lastName', payload.lastName);
            return state;
        case 'INIT_USER':
            const user = new User('', '',
                localStorage.getItem('firstName'),
                localStorage.getItem('lastName'),
                localStorage.getItem('userId'), 
                localStorage.getItem('token')
            );
            return user;
        case 'LOGOUT':
            localStorage.clear();
            return payload;
		default:
			return state;
	}
}
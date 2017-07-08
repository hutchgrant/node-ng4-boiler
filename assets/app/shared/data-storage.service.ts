import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { AuthService } from './../auth/auth.service';

@Injectable()
export class DataStorageService {
  user = {firstName: '', userId: ''};

  constructor(private http: Http) {}
}

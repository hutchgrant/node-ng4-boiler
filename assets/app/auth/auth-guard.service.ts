import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authService.isLoggedIn()){
       return true;
    }else{
      this.router.navigate(['/auth/signin']);
      return false;
    }
  }

  /// Lazy loading
  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    return this.authService.isLoggedIn();
  }
}

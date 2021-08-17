import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    return this.checkLoggedIn();
  }

  checkLoggedIn() {
    return this.authService.currentUser$
    .pipe(
      map(
        user => {
          if (user) {
            return true;
          }

          this.router.navigate(['/login']);
          return false;
        }
      )
    );
  }
}

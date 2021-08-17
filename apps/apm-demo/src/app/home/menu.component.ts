import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../user/auth.service';

@Component({
  selector: 'pm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  pageTitle = 'Acme Product Management';

  get currentUser$() {
    return this.authService.currentUser$;
  }

  constructor(private router: Router, private authService: AuthService) { }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }
}

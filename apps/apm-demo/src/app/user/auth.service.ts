import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../+state/app.state';
import { UserPageActions } from './+state/actions';

import { getCurrentUser } from './+state/user.selectors';

import { User } from './user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    constructor(
      private store: Store<State>
    ) { }

    get currentUser$() {
      return this.store.select(getCurrentUser);
    }

    login(userName: string, password: string): void {
        // Code here would log into a back end service
        // and return user information
        // This is just hard-coded here.
        /* this.currentUser = {
            id: 2,
            userName,
            isAdmin: false
        }; */

        const currentUser: User = {
          id: 2,
          userName,
          isAdmin: false
        };

        this.store.dispatch(UserPageActions.setCurrentUser({ user: currentUser }));
    }

    logout(): void {
        this.store.dispatch(UserPageActions.setCurrentUser({ user: null }));
    }
}

import { createReducer, on } from "@ngrx/store";
import * as UserActions from './../+state/user.actions';

import { User } from "../user";

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initialState: UserState = {
  maskUserName: true,
  currentUser: null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.maskUserName, (state): UserState => {
      return {
        ...state,
        maskUserName: !state.maskUserName
      };
    }
  ),
  on(UserActions.setCurrentUser, (state, action): UserState => {
    return {
      ...state,
      currentUser: action.user
    };
  })
);

import { createAction, createReducer, on } from "@ngrx/store";
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
  on(createAction('[Login] Mask User Name'), (state): UserState => {
      return {
        ...state,
        maskUserName: !state.maskUserName
      };
    }
  )
);

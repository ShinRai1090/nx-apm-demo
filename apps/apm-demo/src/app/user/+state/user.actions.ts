import { createAction, props } from "@ngrx/store";
import { User } from "../user";

export const maskUserName = createAction(
  '[Login] Mask User Name'
);

export const setCurrentUser = createAction(
  '[Login] Set Current User',
  props<{ user: User }>()
);

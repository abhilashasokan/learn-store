import { createAction, props } from "@ngrx/store";

export const createUser = createAction(
  "[Register] Create User",
  props<{ newUser: any }>()
);

export const createUserSuccess = createAction(
  "[Register] Create User Success",
  props<{ firstName: string; lastName: string; email: string }>()
);

export const newUserError = createAction(
  "[Register] User Create Error",
  props<{ error: any }>()
);

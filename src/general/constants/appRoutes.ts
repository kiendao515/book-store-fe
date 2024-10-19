export const APP_MAIN_ROUTES = {
  AUTH: "auth",
};

export const AUTH_SUB_ROUTES = {
  LOGIN: "login",
  SIGN_UP: "sign-up",
};

export const AUTH_ROUTES = {
  LOGIN: `/${APP_MAIN_ROUTES.AUTH}/${AUTH_SUB_ROUTES.LOGIN}`,
  SIGN_UP: `/${APP_MAIN_ROUTES.AUTH}/${AUTH_SUB_ROUTES.SIGN_UP}`,
};

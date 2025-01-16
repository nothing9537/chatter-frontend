export enum AppRoutes {
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
}

export class RoutesPath {
  public static getRouteSignIn(): AppRoutes {
    return AppRoutes.SIGN_IN;
  }

  public static getRouteSignUp(): AppRoutes {
    return AppRoutes.SIGN_UP;
  }
}

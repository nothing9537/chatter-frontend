/* eslint-disable no-dupe-class-members */
export enum AppRoutes {
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  SETTINGS = '/profile-settings',
  HOME = '/',
}

export class RoutesPath {
  public static getRouteSignIn(): AppRoutes {
    return AppRoutes.SIGN_IN;
  }

  public static getRouteSignUp(): AppRoutes {
    return AppRoutes.SIGN_UP;
  }

  public static getRouteHome(): AppRoutes;

  public static getRouteHome(id: number | string): AppRoutes;

  public static getRouteHome(id?: number | string): AppRoutes {
    if (id !== undefined) {
      return `${AppRoutes.HOME}${id}` as AppRoutes;
    }

    return AppRoutes.HOME;
  }

  public static getRouteSettings(): AppRoutes {
    return AppRoutes.SETTINGS;
  }
}

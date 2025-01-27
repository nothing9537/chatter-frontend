import { HomePage, SelectChatPage } from '@/pages/home';
import { NotFoundPage } from '@/pages/not-found';
import { SignInPage } from '@/pages/sing-in';
import { SignUpPage } from '@/pages/sing-up';
import { UserSettingsPage } from '@/pages/user-settings';

import { AppRoutes, RoutesPath } from '@/shared/consts/router-consts';
import { AppRouteProps } from '@/shared/types/router-types';

const initialRoutesConfig: AppRouteProps[] = [
  {
    path: RoutesPath.getRouteSignIn(),
    element: <SignInPage />,
    authOnly: false,
  },
  {
    path: RoutesPath.getRouteSignUp(),
    element: <SignUpPage />,
    authOnly: false,
  },
  {
    path: RoutesPath.getRouteHome(),
    element: <SelectChatPage />,
    authOnly: true,
  },
  {
    path: RoutesPath.getRouteHome(':_id'),
    element: <HomePage />,
    authOnly: true,
  },
  {
    path: RoutesPath.getRouteSettings(),
    element: <UserSettingsPage />,
    authOnly: true,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export class RoutesConfig {
  private routes: Map<AppRoutes, AppRouteProps> = new Map();

  constructor(initialRoutes: AppRouteProps[]) {
    initialRoutes.forEach((route) => {
      this.routes.set(route.path as AppRoutes, route);
    });
  }

  public addRoute(route: AppRoutes, node: AppRouteProps) {
    this.routes.set(route, node);
  }

  public deleteRoute(route: AppRoutes) {
    this.routes.delete(route);
  }

  public collect() {
    return Array.from(this.routes.values());
  }
}

export default new RoutesConfig(initialRoutesConfig);

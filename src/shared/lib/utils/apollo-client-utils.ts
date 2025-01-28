import { apolloClient } from '@/shared/api/apollo-client';
import { authenticatedVar } from '@/shared/consts/authenticated';
import { RoutesPath } from '@/shared/consts/router-consts';
import { AuthToken } from './auth-token-utils';

export const onLogout = () => {
  apolloClient.resetStore();
  authenticatedVar(false);
  AuthToken.removeToken();
  window.location.pathname = RoutesPath.getRouteSignIn();
};

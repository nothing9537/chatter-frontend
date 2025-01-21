import { apolloClient } from '@/shared/api/apollo-client';
import { authenticatedVar } from '@/shared/consts/authenticated';
import { RoutesPath } from '@/shared/consts/router-consts';

export const onLogout = () => {
  apolloClient.resetStore();
  window.location.pathname = RoutesPath.getRouteSignIn();
  authenticatedVar(false);
};

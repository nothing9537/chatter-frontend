import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import RoutesConfig from '@/app/providers/router-provider/config/routes.config';
import { RoutesPath } from '../consts/router-consts';

const logoutLink = onError((error) => {
  if (error.graphQLErrors?.length && (error.graphQLErrors[0]?.extensions?.originalError as any)?.statusCode === 401) {
    if (RoutesConfig.collect().filter(({ authOnly }) => Boolean(authOnly)).find((route) => route.path?.includes(window.location.pathname))) {
      window.location.pathname = RoutesPath.getRouteSignIn();
    }
  }
});

const httpLink = new HttpLink({ uri: `${import.meta.env.VITE_API_URL}/graphql` });

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: logoutLink.concat(httpLink),
});

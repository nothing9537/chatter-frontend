import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import RoutesConfig from '@/app/providers/router-provider/config/routes.config';

import { onLogout } from '../lib/utils/apollo-client-utils';
import { toast } from '../lib/hooks/use-toast';

const wetherCurrentRouteIsProtectedRoute = RoutesConfig
  .collect()
  .filter(({ authOnly }) => Boolean(authOnly))
  .find((route) => route.path?.includes(window.location.pathname));

const networkErrorLink = onError((error) => {
  if (error.networkError) {
    let errorMessage = error.networkError.message;

    if (error.networkError.name.includes('ServerError')) {
      errorMessage = 'Please check your internet connection. If it\'s stable, then it\'s a problem on our side and we\'re working on fixing it :(';
    }

    toast({
      title: 'Network Action',
      description: errorMessage,
    });
  }
});

const logoutLink = onError((error) => {
  if (error.graphQLErrors?.length && (error.graphQLErrors[0]?.extensions?.originalError as any)?.statusCode === 401) {
    if (wetherCurrentRouteIsProtectedRoute) {
      onLogout();
    }
  }
});

const httpLink = new HttpLink({ uri: `${import.meta.env.VITE_API_URL}/graphql` });

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: logoutLink.concat(networkErrorLink).concat(httpLink),
});

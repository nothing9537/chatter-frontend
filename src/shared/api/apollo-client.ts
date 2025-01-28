import { ApolloClient, InMemoryCache } from '@apollo/client';

import { authLink, logoutLink, networkErrorLink, splitLink } from './apollo-links';
import { mergeWithPagination } from './apollo-merge';

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          chats: { keyArgs: false, merge: mergeWithPagination },
          messages: { keyArgs: ['chatId'], merge: mergeWithPagination },
        },
      },
    },
  }),
  link: authLink.concat(splitLink).concat(networkErrorLink).concat(logoutLink),
});

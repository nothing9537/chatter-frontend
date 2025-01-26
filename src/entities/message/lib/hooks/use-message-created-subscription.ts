import { ApolloCache, useSubscription } from '@apollo/client';

import { graphql, Message, SubscriptionMessageCreatedArgs } from '@/shared/generated/graphql';

import { updateMessagesCache } from '../helpers/cache/update-messages-cache';

const MESSAGE_CREATED_DOCUMENT = graphql(`
  subscription messageCreated($chatId: String!) {
    messageCreated(chatId: $chatId) {
      ...MessageFragment
    }
  }
`);

export const useMessageCreatedSubscription = (variables: SubscriptionMessageCreatedArgs) => {
  return useSubscription(MESSAGE_CREATED_DOCUMENT, {
    variables,
    onData: ({ client, data }) => {
      if (data?.data) {
        updateMessagesCache(client.cache as ApolloCache<Message>, data.data.messageCreated);
      }
    },
  });
};

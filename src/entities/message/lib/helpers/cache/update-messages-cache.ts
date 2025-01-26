import { ApolloCache } from '@apollo/client';

import { Message } from '@/shared/generated/graphql';

import { GET_MESSAGE_DOCUMENTS } from '../../hooks/use-get-messages';

export const updateMessagesCache = (cache: ApolloCache<Message>, message: Message) => {
  const messagesQueryOptions = {
    query: GET_MESSAGE_DOCUMENTS,
    variables: {
      chatId: message.chatId,
    },
  };

  const messages = cache.readQuery({ ...messagesQueryOptions });

  cache.writeQuery({
    ...messagesQueryOptions,
    data: {
      messages: (messages?.messages || []).concat(message),
    },
  });
};

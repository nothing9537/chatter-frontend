import { ApolloCache } from '@apollo/client';

import { Message } from '@/shared/generated/graphql';
import { GET_CHAT_DOCUMENTS } from '@/entities/chat/lib/hooks/use-get-chats';
import { PAGE_SIZE } from '@/shared/consts/pagination';

import { GET_MESSAGE_DOCUMENTS } from '../../hooks/use-get-messages';

export const updateMessagesCache = (cache: ApolloCache<Message>, message: Message) => {
  const messagesQueryOptions = {
    query: GET_MESSAGE_DOCUMENTS,
    variables: {
      chatId: message.chatId,
      skip: 0,
      limit: PAGE_SIZE,
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

export const updateLatestMessageCache = (cache: ApolloCache<Message>, message: Message) => {
  const chats = [...(cache.readQuery({ query: GET_CHAT_DOCUMENTS })?.chats || [])];

  const cachedChatIndex = chats.findIndex((chat) => chat._id === message.chatId);

  if (cachedChatIndex === -1) {
    return;
  }

  const chat = chats[cachedChatIndex];
  const chatCopy = { ...chat };

  chatCopy.latestMessage = message;

  chats[cachedChatIndex] = chatCopy;

  cache.writeQuery({
    query: GET_CHAT_DOCUMENTS,
    data: {
      chats,
    },
  });
};

import { useMutation } from '@apollo/client';

import { graphql } from '@/shared/generated/graphql';

import { GET_MESSAGE_DOCUMENTS } from './use-get-messages';

const CREATE_MESSAGE_DOCUMENT = graphql(`
  mutation CreateMessage($createMessageInput: CreateMessageInput!) {
    createMessage(createMessageInput: $createMessageInput) {
      ...MessageFragment
    }
  }
`);

export const useCreateMessage = (chatId: string) => {
  return useMutation(CREATE_MESSAGE_DOCUMENT, {
    update: (cache, { data }) => {
      const messagesQueryOptions = {
        query: GET_MESSAGE_DOCUMENTS,
        variables: {
          chatId,
        },
      };

      const messages = cache.readQuery({ ...messagesQueryOptions });

      if (!messages || !data?.createMessage) {
        return;
      }

      cache.writeQuery({
        ...messagesQueryOptions,
        data: {
          messages: messages.messages.concat(data?.createMessage),
        },
      });
    },
  });
};

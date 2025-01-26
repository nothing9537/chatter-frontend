import { useMutation } from '@apollo/client';

import { graphql } from '@/shared/generated/graphql';

import { updateMessagesCache } from '../helpers/cache/update-messages-cache';

const CREATE_MESSAGE_DOCUMENT = graphql(`
  mutation CreateMessage($createMessageInput: CreateMessageInput!) {
    createMessage(createMessageInput: $createMessageInput) {
      ...MessageFragment
    }
  }
`);

export const useCreateMessage = () => {
  return useMutation(CREATE_MESSAGE_DOCUMENT, {
    update: (cache, { data }) => {
      if (data?.createMessage) {
        updateMessagesCache(cache, data.createMessage);
      }
    },
  });
};

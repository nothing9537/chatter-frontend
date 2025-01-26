import { useMutation } from '@apollo/client';

import { graphql } from '@/shared/generated/graphql';
import { ChatFragment } from '@/shared/fragments/chat.fragment';

const CREATE_CHAT_DOCUMENT = graphql(`
  mutation CreateChatInput($createChatInput: CreateChatInput!) {
    createChat(createChatInput: $createChatInput) {
      ...ChatFragment
    }
  }  
`);

export const useCreateChat = () => {
  return useMutation(CREATE_CHAT_DOCUMENT, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          chats: (existingChats = []) => {
            const newChatRef = cache.writeFragment({
              data: data?.createChat,
              fragment: ChatFragment,
              fragmentName: 'ChatFragment',
            });

            return [...existingChats, newChatRef];
          },
        },
      });
    },
  });
};

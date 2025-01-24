import { useMutation } from '@apollo/client';
import { graphql } from '@/shared/generated/graphql';

const CREATE_CHAT_DOCUMENT = graphql(`
  mutation CreateChatInput($createChatInput: CreateChatInput!) {
    createChat(createChatInput: $createChatInput) {
      _id
      userId
      isPrivate
      userIds
      name
    }
  }  
`);

export const useCreateChat = () => {
  return useMutation(CREATE_CHAT_DOCUMENT);
};

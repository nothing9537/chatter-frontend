import { useMutation } from '@apollo/client';
import { graphql } from '@/shared/generated/graphql';

const CREATE_MESSAGE_DOCUMENT = graphql(`
  mutation CreateMessage($createMessageInput: CreateMessageInput!) {
    createMessage(createMessageInput: $createMessageInput) {
      _id
      content
      createdAt
    }
  }
`);

export const useCreateMessage = () => {
  return useMutation(CREATE_MESSAGE_DOCUMENT);
};

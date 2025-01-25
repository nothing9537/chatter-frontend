import { useQuery } from '@apollo/client';
import { GetMessagesQueryVariables, graphql } from '@/shared/generated/graphql';

export const GET_MESSAGE_DOCUMENTS = graphql(`
  query GetMessages($chatId: String!) {
    messages(chatId: $chatId) {
      ...MessageFragment
    }
  }
`);

export const useGetMessages = (variables: GetMessagesQueryVariables) => {
  return useQuery(GET_MESSAGE_DOCUMENTS, { variables });
};

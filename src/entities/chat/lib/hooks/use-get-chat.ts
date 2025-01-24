import { useQuery } from '@apollo/client';
import { ChatQueryVariables, graphql } from '@/shared/generated/graphql';

const GET_CHAT_DOCUMENT = graphql(`
  query Chat($_id: String!) {
    chat(_id: $_id) {
      ...ChatFragment
    }
  } 
`);

export const useGetChat = (variables: ChatQueryVariables) => {
  return useQuery(GET_CHAT_DOCUMENT, { variables });
};

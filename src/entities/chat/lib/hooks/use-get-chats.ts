import { useQuery } from '@apollo/client';

import { QueryChatsArgs, graphql } from '@/shared/generated/graphql';

export const GET_CHAT_DOCUMENTS = graphql(`
  query Chats($skip: Int!, $limit: Int!) {
    chats(skip: $skip, limit: $limit) {
      ...ChatFragment
    }
  }
`);

export const useGetChats = (variables: QueryChatsArgs) => {
  return useQuery(GET_CHAT_DOCUMENTS, { variables });
};

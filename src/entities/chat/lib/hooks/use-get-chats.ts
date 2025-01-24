import { useQuery } from '@apollo/client';
import { graphql } from '@/shared/generated/graphql';

export const GET_CHAT_DOCUMENTS = graphql(`
  query Chats {
    chats {
      ...ChatFragment
    }
  }
`);

export const useGetChats = () => {
  return useQuery(GET_CHAT_DOCUMENTS);
};

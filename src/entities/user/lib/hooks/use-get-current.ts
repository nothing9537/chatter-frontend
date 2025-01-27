import { useQuery } from '@apollo/client';
import { graphql } from '@/shared/generated/graphql';

export const CURRENT_USER_DOCUMENT = graphql(`
  query CurrentUser {
    currentUser {
      ...UserFragment
    }
  }
`);

export const useGetCurrentUser = () => {
  return useQuery(CURRENT_USER_DOCUMENT);
};

import { useQuery } from '@apollo/client';
import { graphql } from '@/shared/generated/graphql';

const CURRENT_USER_DOCUMENT = graphql(`
  query CurrentUser {
    currentUser {
      _id
      email
    }
  }
`);

export const useGetCurrentUser = () => {
  return useQuery(CURRENT_USER_DOCUMENT);
};

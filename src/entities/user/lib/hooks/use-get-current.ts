import { gql, useQuery } from '@apollo/client';
import { User } from '../model/types/user-types';

const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    currentUser {
      _id
      email
    }
  }
`;

export const useGetCurrentUser = () => {
  return useQuery<{ currentUser: User }>(CURRENT_USER_QUERY);
};

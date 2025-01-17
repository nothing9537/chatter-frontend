import { gql, useMutation } from '@apollo/client';

import { User } from '../../model/types/user-types';

interface CreateUserPayload {
  createUserInput: {
    email: string;
    password: string;
  }
}

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
    }
  }
`;

export const useCreateUser = () => {
  return useMutation<User, CreateUserPayload>(CREATE_USER_MUTATION);
};

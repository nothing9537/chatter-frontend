import { useMutation } from '@apollo/client';
import { graphql } from '@/shared/generated/graphql';

const CREATE_USER_DOCUMENT = graphql(`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
    }
  }
`);

export const useCreateUser = () => {
  return useMutation(CREATE_USER_DOCUMENT);
};

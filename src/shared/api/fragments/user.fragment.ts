import { graphql } from '@/shared/generated/graphql';

export const UserFragment = graphql(`
  fragment UserFragment on User {
    _id
    email
    username
    imageUrl
  }  
`);

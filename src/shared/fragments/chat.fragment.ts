import { graphql } from '../generated/graphql';

export const ChatFragment = graphql(`
  fragment ChatFragment on Chat {
    _id
    name
    isPrivate
    userIds
    userId
  }
`);

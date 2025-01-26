import { graphql } from '../generated/graphql';

export const MessageFragment = graphql(`
  fragment MessageFragment on Message {
    _id
    content
    createdAt
    chatId
    user {
      _id
      email
      username
    }
  }
`);

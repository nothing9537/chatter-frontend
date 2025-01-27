import { graphql } from '@/shared/generated/graphql';

export const MessageFragment = graphql(`
  fragment MessageFragment on Message {
    _id
    content
    createdAt
    chatId
    user {
      ...UserFragment
    }
  }
`);

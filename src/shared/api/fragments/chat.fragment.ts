import { graphql } from '@/shared/generated/graphql';

export const ChatFragment = graphql(`
  fragment ChatFragment on Chat {
    _id
    name
    latestMessage {
      ...MessageFragment
    }
  }
`);

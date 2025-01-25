import { useSubscription } from '@apollo/client';
import { graphql, SubscriptionMessageCreatedArgs } from '@/shared/generated/graphql';

const MESSAGE_CREATED_DOCUMENT = graphql(`
  subscription messageCreated($chatId: String!) {
    messageCreated(chatId: $chatId) {
      ...MessageFragment
    }
  }
`);

export const useMessageCreatedSubscription = (variables: SubscriptionMessageCreatedArgs) => {
  return useSubscription(MESSAGE_CREATED_DOCUMENT, { variables });
};

import { useEffect, useState } from 'react';

import { useGetMessages, useMessageCreatedSubscription } from '@/entities/message';
import { Message } from '@/shared/generated/graphql';

export const useCombinedMessages = (chatId: string): [Message[], boolean] => {
  const { data: httpMessages, loading: httpLoading } = useGetMessages({ chatId });
  const { data: latestWsMessage, loading: wsLoading } = useMessageCreatedSubscription({ chatId });

  const [combinedMessages, setCombinedMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (httpMessages) {
      setCombinedMessages(httpMessages.messages);
    }
  }, [httpMessages]);

  useEffect(() => {
    const lastHttpMessageId = combinedMessages[combinedMessages.length - 1]?._id;

    if (latestWsMessage?.messageCreated && lastHttpMessageId !== latestWsMessage.messageCreated._id) {
      setCombinedMessages((prevMessages) => [...prevMessages, latestWsMessage.messageCreated]);
    }
  }, [combinedMessages, latestWsMessage]);

  return [combinedMessages, httpLoading && wsLoading];
};

import { FC } from 'react';

import { MessageList, useGetMessages, useMessageCreatedSubscription } from '@/entities/message';

interface MessagesDisplayProps {
  chatId: string;
  trackableChatIds: string[];
  className?: string;
}

export const MessagesDisplay: FC<MessagesDisplayProps> = ({ chatId, className, trackableChatIds }) => {
  const { data, loading: isLoading } = useGetMessages({ chatId });
  useMessageCreatedSubscription({ chatIds: trackableChatIds });

  return (
    <MessageList
      data={data?.messages}
      isLoading={isLoading}
      className={className}
    />
  );
};

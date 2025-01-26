import { FC } from 'react';

import { MessageList, useGetMessages, useMessageCreatedSubscription } from '@/entities/message';

interface MessagesDisplayProps {
  chatId: string;
  className?: string;
}

export const MessagesDisplay: FC<MessagesDisplayProps> = ({ chatId, className }) => {
  const { data, loading: isLoading } = useGetMessages({ chatId });
  useMessageCreatedSubscription({ chatId });

  return (
    <MessageList
      data={data?.messages}
      isLoading={isLoading}
      className={className}
    />
  );
};

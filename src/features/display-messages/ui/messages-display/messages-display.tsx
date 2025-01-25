import { FC } from 'react';
import { MessageList, useGetMessages } from '@/entities/message';

interface MessagesDisplayProps {
  chatId: string;
  className?: string;
}

export const MessagesDisplay: FC<MessagesDisplayProps> = ({ chatId, className }) => {
  const { data, loading } = useGetMessages({ chatId });

  return (
    <MessageList
      data={data?.messages}
      isLoading={loading}
      className={className}
    />
  );
};

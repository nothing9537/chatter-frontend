import { FC } from 'react';

import { Loader } from '@/shared/ui/loader';
import { Message } from '@/shared/generated/graphql';
import { Stack } from '@/shared/ui/stack';
import { useScrollToBottom } from '@/shared/lib/hooks/use-scroll-to-bottom';

import { MessageCard } from '../message-card/message-card';

interface MessageListProps {
  data?: Message[];
  isLoading: boolean;
  className?: string;
}

export const MessageList: FC<MessageListProps> = ({ data, isLoading, className }) => {
  const bottom = useScrollToBottom(data);

  if (!data || isLoading) {
    return <Loader />;
  }

  return (
    <Stack direction="vertical" spacing={2} className={className}>
      {data.map((item) => <MessageCard item={item} key={item._id} />)}
      {bottom}
    </Stack>
  );
};

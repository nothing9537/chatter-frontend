import { FC } from 'react';

import { Loader } from '@/shared/ui/loader';
import { Message } from '@/shared/generated/graphql';
import { Stack } from '@/shared/ui/stack';
import { useScrollToElement } from '@/shared/lib/hooks/use-scroll-to-bottom';

import { MessageCard } from '../message-card/message-card';
import { DateFnsLoader, DateFnsProvider } from '../../lib/helpers/context/date-fns-context';

interface MessageListProps {
  data?: Message[];
  isLoading: boolean;
  className?: string;
  loadMoreObservableElement?: {
    el: JSX.Element;
    position?: 'aboveChild' | 'belowChild';
  };
}

export const MessageList: FC<MessageListProps> = ({
  data,
  isLoading,
  className,
  loadMoreObservableElement = { el: null, position: 'aboveChild' },
}) => {
  const { element } = useScrollToElement(data);

  if (!data || isLoading) {
    return <Loader />;
  }

  return (
    <DateFnsProvider loaders={DateFnsLoader}>
      <Stack direction="vertical" spacing={2} className={className}>
        {loadMoreObservableElement.position === 'aboveChild' && loadMoreObservableElement.el}
        {[...data]
          .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
          .map((item) => <MessageCard item={item} key={item._id} />)}
        {loadMoreObservableElement.position === 'belowChild' && loadMoreObservableElement.el}
        {element}
      </Stack>
    </DateFnsProvider>
  );
};

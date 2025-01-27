import { FC, memo } from 'react';

import { MessageList, useGetMessages, useMessageCreatedSubscription } from '@/entities/message';
import { useTotalDocumentsCount } from '@/shared/lib/hooks/use-total-document-count';
import { useInfiniteScroll } from '@/shared/lib/hooks/use-infinite-scroll';
import { PAGE_SIZE } from '@/shared/consts/pagination';

interface MessagesDisplayProps {
  chatId: string;
  trackableChatIds: string[];
  className?: string;
}

export const MessagesDisplay: FC<MessagesDisplayProps> = memo(({ chatId, className, trackableChatIds }) => {
  const { data, loading: isLoading, fetchMore } = useGetMessages({ chatId, skip: 0, limit: PAGE_SIZE });
  const { totalCount } = useTotalDocumentsCount('/messages/count', { chatId });

  const { triggerElement: el } = useInfiniteScroll({
    canLoadMore: data?.messages && totalCount ? data.messages.length < totalCount : false,
    loadMore: () => fetchMore({ variables: { skip: data?.messages.length || 0, limit: PAGE_SIZE } }),
    isLoadingMore: isLoading,
  });

  useMessageCreatedSubscription({ chatIds: trackableChatIds });

  return (
    <MessageList
      loadMoreObservableElement={{ el, position: 'aboveChild' }}
      data={data?.messages}
      isLoading={isLoading}
      className={className}
    />
  );
});

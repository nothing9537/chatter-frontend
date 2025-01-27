import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { AddChatButton } from '@/features/add-chat';
import { ChatList, useGetChats } from '@/entities/chat';
import { Stack } from '@/shared/ui/stack';
import { RoutesPath } from '@/shared/consts/router-consts';
import { InfiniteScroll } from '@/shared/components/infinite-scroll';
import { useTotalDocumentsCount } from '@/shared/lib/hooks/use-total-document-count';

export const ChatListSidebar: FC = () => {
  const { data, loading, fetchMore } = useGetChats({ skip: 0, limit: 1 });
  const { totalCount } = useTotalDocumentsCount('/chats/count');
  const params = useParams<{ _id: string }>();

  return (
    <Stack className="h-full" direction="vertical">
      <AddChatButton />
      <InfiniteScroll
        isLoadingMore={loading}
        loadMore={() => fetchMore({ variables: { skip: data?.chats.length || 0, limit: 10 } })}
        canLoadMore={data?.chats && totalCount ? data.chats.length < totalCount : false}
        triggerPosition="belowChild"
      >
        <ChatList
          data={data?.chats}
          isLoading={loading}
          isItemSelected={({ _id }) => _id === params?._id}
          navigateRouteBasename={(id) => RoutesPath.getRouteHome(id)}
          className="flex-1"
        />
      </InfiniteScroll>
    </Stack>
  );
};

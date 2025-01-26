import { FC } from 'react';

import { useParams } from 'react-router-dom';
import { AddChatButton } from '@/features/add-chat';
import { ChatList, useGetChats } from '@/entities/chat';
import { Stack } from '@/shared/ui/stack';
import { RoutesPath } from '@/shared/consts/router-consts';

export const ChatListSidebar: FC = () => {
  const { data, loading } = useGetChats();
  const params = useParams<{ _id: string }>();

  return (
    <Stack className="h-full" direction="vertical">
      <AddChatButton />
      <ChatList
        data={data?.chats}
        isLoading={loading}
        isItemSelected={({ _id }) => _id === params?._id}
        navigateRouteBasename={(id) => RoutesPath.getRouteHome(id)}
        className="flex-1"
      />
    </Stack>
  );
};

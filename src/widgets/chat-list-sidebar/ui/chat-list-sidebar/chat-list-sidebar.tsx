import { FC } from 'react';

import { AddChatButton } from '@/features/add-chat';
import { ChatList, useGetChats } from '@/entities/chat';
import { Stack } from '@/shared/ui/stack';
import { RoutesPath } from '@/shared/consts/router-consts';

export const ChatListSidebar: FC = () => {
  const { data, loading } = useGetChats();

  return (
    <Stack className="h-full" direction="vertical">
      <AddChatButton />
      <ChatList
        data={data?.chats}
        isLoading={loading}
        navigateRouteBasename={(id) => RoutesPath.getRouteHome(id)}
        className="flex-1"
      />
    </Stack>
  );
};

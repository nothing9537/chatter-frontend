import { FC } from 'react';
import { AddChatButton } from '@/features/add-chat';
import { Stack } from '@/shared/ui/stack';

export const ChatListSidebar: FC = () => {
  return (
    <Stack className="h-[80vh]">
      <AddChatButton />
    </Stack>
  );
};

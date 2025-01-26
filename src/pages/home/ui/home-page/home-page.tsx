import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { ChatListSidebar } from '@/widgets/chat-list-sidebar';
import { SendMessageForm } from '@/features/send-message';
import { MessagesDisplay } from '@/features/display-messages';
import { useGetChat, useGetChats } from '@/entities/chat';
import { Typography } from '@/shared/ui/typography';
import { Loader } from '@/shared/ui/loader';

import { useCatchEscapeAndRedirect } from '../../lib/hooks/use-catch-escape';
import { HomePageLayout } from '../page-layout';

const HomePage: FC = () => {
  useCatchEscapeAndRedirect();

  const params = useParams<{ _id: string }>();
  const _id = params._id!;
  const { data: currentChat, loading: isCurrentChatLoading } = useGetChat({ _id });
  const { data: chats, loading: isChatsLoading } = useGetChats();

  if (!currentChat || !chats || isCurrentChatLoading || isChatsLoading) {
    return <Loader />;
  }

  return (
    <HomePageLayout asideElement={<ChatListSidebar />}>
      <div className="flex flex-col p-4 h-full w-full gap-2">
        <Typography variant="h2">
          {currentChat.chat.name}
        </Typography>
        <MessagesDisplay
          chatId={_id}
          className="flex-1 overflow-y-auto"
          trackableChatIds={chats.chats.map(({ _id }) => _id)}
        />
        <SendMessageForm chatId={_id} />
      </div>
    </HomePageLayout>
  );
};

export default memo(HomePage);

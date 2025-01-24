import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { ChatListSidebar } from '@/widgets/chat-list-sidebar';
import { SendMessageForm } from '@/features/send-message';
import { useGetChat } from '@/entities/chat';
import { Typography } from '@/shared/ui/typography';
import { Loader } from '@/shared/ui/loader';

import { useCatchEscapeAndRedirect } from '../../lib/hooks/use-catch-escape';
import { HomePageLayout } from '../page-layout';

const HomePage: FC = () => {
  useCatchEscapeAndRedirect();

  const { _id } = useParams<{ _id: string }>();
  const { data, loading } = useGetChat({ _id: _id! });

  if (!data || loading) {
    return <Loader />;
  }

  return (
    <HomePageLayout asideElement={<ChatListSidebar />}>
      <div className="flex flex-col p-4 h-full w-full">
        <Typography>
          {data.chat.name}
        </Typography>
        <div className="flex-1">
          Messages
        </div>
        <SendMessageForm
          chatId={_id!}
        />
      </div>
    </HomePageLayout>
  );
};

export default HomePage;

import { FC } from 'react';

import { PageWrapper } from '@/shared/components/page-wrapper';
import { ChatListSidebar } from '@/widgets/chat-list-sidebar';

import { HomePageLayout } from '../page-layout';

export const SelectChatPage: FC = () => {
  return (
    <HomePageLayout asideElement={<ChatListSidebar />}>
      <PageWrapper>
        <h1>
          To display messages please select a chat
        </h1>
      </PageWrapper>
    </HomePageLayout>
  );
};

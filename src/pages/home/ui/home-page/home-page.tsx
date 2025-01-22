import { FC } from 'react';

import { PageWrapper } from '@/shared/components/page-wrapper';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/shared/ui/resizable';
import { ChatListSidebar } from '@/widgets/chat-list-sidebar';

const HomePage: FC = () => {
  return (
    <ResizablePanelGroup direction="horizontal" autoSaveId="chat-resizable-layout">
      <ResizablePanel minSize={15} maxSize={35} defaultSize={15} className="p-2" id="chat-list-sidebar">
        <ChatListSidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel maxSize={85} defaultSize={85} id="main">
        <PageWrapper>
          Home page
        </PageWrapper>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default HomePage;

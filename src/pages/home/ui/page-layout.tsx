import { FC, ReactNode } from 'react';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/shared/ui/resizable';

interface HomePageLayoutProps {
  asideElement: ReactNode;
  children: ReactNode;
}

export const HomePageLayout: FC<HomePageLayoutProps> = ({ asideElement, children }) => {
  return (
    <ResizablePanelGroup direction="horizontal" autoSaveId="chat-resizable-layout">
      <ResizablePanel minSize={15} maxSize={35} defaultSize={15} className="p-2" id="chat-list-sidebar">
        {asideElement}
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel maxSize={85} defaultSize={85} id="main">
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

import { FC, ReactNode } from 'react';
import { SidebarInset, SidebarProvider } from '../ui/sidebar';

interface MainLayoutProps {
  sidebar: ReactNode;
  header: ReactNode;
  content: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ sidebar, header, content }) => {
  return (
    <SidebarProvider>
      {sidebar}
      <SidebarInset>
        {header}
        {content}
      </SidebarInset>
    </SidebarProvider>
  );
};

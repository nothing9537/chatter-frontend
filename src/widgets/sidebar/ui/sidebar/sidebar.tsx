/* eslint-disable react/destructuring-assignment */
import { Link, useLocation } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from '@/shared/ui/sidebar';
import { authenticatedVar } from '@/shared/consts/authenticated';
import { UserButton } from '@/features/user-button';

import { SidebarItem } from '../../model/types/sidebar-item';
import { SidebarItems } from '../../lib/consts/sidebar-items';

const renderSidebarItem = (location: string) => (item: SidebarItem) => {
  return (
    <Link to={item.path} key={item.path}>
      <SidebarMenuItem>
        <SidebarMenuButton
          tooltip={{ hidden: false, children: item.title }}
          isActive={location.includes(item.path)}
          className="px-2.5 md:px-2"
        >
          <item.icon />
          <span>{item.title}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </Link>
  );
};

export const AppSidebar: React.FC<React.ComponentProps<typeof Sidebar>> = ({ ...props }) => {
  const location = useLocation();

  const isAuthenticated = useReactiveVar(authenticatedVar);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="px-1.5 md:px-0">
            <SidebarMenu>
              {SidebarItems.map(renderSidebarItem(location.pathname))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserButton />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

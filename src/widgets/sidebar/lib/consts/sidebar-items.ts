import { MessageSquareText } from 'lucide-react';

import { RoutesPath } from '@/shared/consts/router-consts';

import { SidebarItem } from '../../model/types/sidebar-item';

export const SidebarItems: SidebarItem[] = [
  {
    path: RoutesPath.getRouteHome(),
    icon: MessageSquareText,
    title: 'Chats',
  },
];

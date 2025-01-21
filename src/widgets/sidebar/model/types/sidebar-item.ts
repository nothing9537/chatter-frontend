import { LucideIcon } from 'lucide-react';
import { AppRoutes } from '@/shared/consts/router-consts';

export interface SidebarItem {
  path: AppRoutes;
  icon: LucideIcon;
  title: string;
}

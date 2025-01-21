import { FC } from 'react';
import { ChevronsUpDown, LogOut, Settings } from 'lucide-react';

import { Avatar, AvatarFallback } from '@/shared/ui/avatar';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { SidebarMenuButton, useSidebar } from '@/shared/ui/sidebar';
import { useGetCurrentUser, useLogoutUser } from '@/entities/user';
import { Hint } from '@/shared/ui/hint';

export const UserButton: FC = () => {
  const { isMobile } = useSidebar();
  const { data } = useGetCurrentUser();
  const logoutHandler = useLogoutUser();

  if (!data?.currentUser) {
    return null;
  }

  const { email } = data.currentUser;

  return (
    <DropdownMenu>
      <Hint label="Settings">
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Avatar className="rounded-lg">
              {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
              <AvatarFallback className="rounded-lg uppercase">{email.charAt(0) + email.charAt(1)}</AvatarFallback>
            </Avatar>
            <ChevronsUpDown className="ml-auto size-4" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
      </Hint>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side={isMobile ? 'bottom' : 'right'}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarFallback className="rounded-lg uppercase">{email.charAt(0) + email.charAt(1)}</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate text-xs">{email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Settings />
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logoutHandler}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

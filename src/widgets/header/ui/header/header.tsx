import { FC } from 'react';

import { useReactiveVar } from '@apollo/client';
import { ThemeSwitcher } from '@/features/theme-switcher';
import { UserButton } from '@/features/user-button';
import { cn } from '@/shared/lib/utils/cn';
import { Stack } from '@/shared/ui/stack';
import { SidebarTrigger } from '@/shared/ui/sidebar';
import { Separator } from '@/shared/ui/separator';

import { authenticatedVar } from '@/shared/consts/authenticated';
import { Branding } from './branding';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const isAuthenticated = useReactiveVar(authenticatedVar);

  return (
    <header className={cn('w-full flex items-center justify-between px-2 h-12 border-b', className)}>
      <Stack direction="horizontal" spacing={2}>
        <SidebarTrigger />
        <Separator className="h-8 w-[1px]" />
        <Branding />
      </Stack>
      <Stack direction="horizontal" spacing={4} className="items-center">
        <ThemeSwitcher />
        {isAuthenticated && (
          <UserButton />
        )}
      </Stack>
    </header>
  );
};

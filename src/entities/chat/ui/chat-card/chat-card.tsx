import { FC } from 'react';

import { Card, CardDescription, CardTitle } from '@/shared/ui/card';
import { Chat } from '@/shared/generated/graphql';
import { Avatar, AvatarFallback } from '@/shared/ui/avatar';
import { Stack } from '@/shared/ui/stack';
import { cn } from '@/shared/lib/utils/cn';

interface ChatCardProps {
  item: Chat;
  isSelected: boolean | ((chatItem: Chat) => boolean);
}

export const ChatCard: FC<ChatCardProps> = ({ item, isSelected }) => {
  let isCardSelected = isSelected;

  if (typeof isSelected === 'function') {
    isCardSelected = isSelected(item);
  }

  return (
    <Card className={cn('w-full border-none shadow-none break-all hover:bg-muted rounded-none p-2 transition-colors', isCardSelected && 'dark:bg-slate-900 bg-gray-200')}>
      <Stack className="space-x-2">
        <Avatar>
          <AvatarFallback>{item.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <Stack direction="vertical" spacing={1} className="truncate break-words break-all">
          <CardTitle>{item.name}</CardTitle>
          <CardDescription className="truncate break-words break-all max-w-80">
            {item.latestMessage
              ? `${item.latestMessage.user.username} - ${item.latestMessage.content}`
              : 'No messages so far'}
          </CardDescription>
        </Stack>
      </Stack>
    </Card>
  );
};

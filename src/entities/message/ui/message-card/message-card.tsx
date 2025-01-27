import { FC, ReactNode } from 'react';

import { Message } from '@/shared/generated/graphql';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { Avatar, AvatarFallback } from '@/shared/ui/avatar';
import { Hint } from '@/shared/ui/hint';
import { Loader } from '@/shared/ui/loader';

import { useDateFns } from '../../lib/helpers/context/date-fns-context';

interface MessageCardProps {
  item: Message;
}

interface MessageCardBaseProps extends MessageCardProps {
  children: ReactNode;
}

const MessageCardBase: FC<MessageCardBaseProps> = ({ item, children }) => {
  return (
    <Card className="flex items-start gap-4 p-4">
      <Avatar>
        <AvatarFallback>{item.user.username.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div>
        <CardHeader className="p-0">
          <CardTitle className="text-sm font-semibold">
            {item.user.username}
          </CardTitle>
          {children}
        </CardHeader>
        <CardContent className="p-0 mt-2">
          <p className="text-sm break-all">{item.content}</p>
        </CardContent>
      </div>
    </Card>
  );
};

export const MessageCard: FC<MessageCardProps> = ({ item }) => {
  const { isLoaded, libraries } = useDateFns();

  if (!isLoaded || !libraries) {
    return (
      <MessageCardBase item={item}>
        <Loader className="size-4 animate-spin" />
      </MessageCardBase>
    );
  }

  const { DateFns: { format, formatDistanceToNow } } = libraries;

  return (
    <MessageCardBase item={item}>
      <Hint label={`${format(item.createdAt, 'MMM d, yyyy')} at ${format(item.createdAt, 'hh:mm:ss a')}`}>
        <p className="text-xs text-muted-foreground underline">
          {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
        </p>
      </Hint>
    </MessageCardBase>
  );
};

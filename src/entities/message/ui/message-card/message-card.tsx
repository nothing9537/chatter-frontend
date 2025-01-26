import { FC } from 'react';
import { formatDistanceToNow } from 'date-fns';

import { Message } from '@/shared/generated/graphql';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { Avatar, AvatarFallback } from '@/shared/ui/avatar';

interface MessageCardProps {
  item: Message;
}

export const MessageCard: FC<MessageCardProps> = ({ item }) => {
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
          <p className="text-xs text-muted-foreground">
            {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
          </p>
        </CardHeader>

        <CardContent className="p-0 mt-2">
          <p className="text-sm">{item.content}</p>
        </CardContent>
      </div>
    </Card>
  );
};

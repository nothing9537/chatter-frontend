import { FC } from 'react';

import { Card } from '@/shared/ui/card';
import { Chat } from '@/shared/generated/graphql';

interface ChatCardProps {
  item: Chat;
}

export const ChatCard: FC<ChatCardProps> = ({ item }) => {
  return (
    <Card className="border-none shadow-none">
      {item?.name}
    </Card>
  );
};

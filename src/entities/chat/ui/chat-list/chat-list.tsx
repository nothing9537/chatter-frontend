import { FC, memo } from 'react';

import { Link } from 'react-router-dom';
import { Chat } from '@/shared/generated/graphql';
import { Loader } from '@/shared/ui/loader';
import { Stack } from '@/shared/ui/stack';
import { AppRoutes } from '@/shared/consts/router-consts';

import { ChatCard } from '../chat-card/chat-card';

interface ChatListProps {
  data?: Chat[];
  isLoading: boolean;
  navigateRouteBasename: (id: string) => AppRoutes;
  className?: string;
}

const renderChatCard = (props: ChatListProps) => (item: Chat) => {
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <Link key={item._id} to={props.navigateRouteBasename(item._id)}>
      <ChatCard item={item} />
    </Link>
  );
};

export const ChatList: FC<ChatListProps> = memo((props) => {
  const { data, isLoading } = props;

  if (isLoading || !data) {
    return <Loader />;
  }

  return (
    <Stack direction="vertical" className={props?.className}>
      {data.map(renderChatCard(props))}
    </Stack>
  );
});

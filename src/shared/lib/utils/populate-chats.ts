import { Chat } from '@/shared/generated/graphql';

/**
 * @param chats - chats needs to be populated
 * @returns A tuple of 2 elements, first - private Chats, second - Public chats
 */
export const populateChats = (chats: Chat[]): [Chat[], Chat[]] => {
  const privateChats: Chat[] = [];
  const publicChats: Chat[] = [];

  for (let i = 0; i < chats.length; i += 1) {
    const chat = chats[i];

    if (chat.isPrivate) {
      privateChats.push(chat);
    } else {
      publicChats.push(chat);
    }
  }

  return [privateChats, publicChats];
};

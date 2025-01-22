import { FC, ReactNode } from 'react';
import { useReactiveVar } from '@apollo/client';

import { AddChatModal } from '@/features/add-chat';
import { authenticatedVar } from '@/shared/consts/authenticated';

interface ModalsProvideProps {
  children: ReactNode;
}

export const ModalsProvider: FC<ModalsProvideProps> = ({ children }) => {
  const isAuthenticated = useReactiveVar(authenticatedVar);

  return (
    <>
      {isAuthenticated && (
        <AddChatModal />
      )}
      {children}
    </>
  );
};

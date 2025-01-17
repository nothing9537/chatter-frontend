import { FC, ReactNode } from 'react';

import { Toaster } from '@/shared/ui/toaster';

interface ToasterProviderProps {
  children: ReactNode;
}

export const ToasterProvider: FC<ToasterProviderProps> = ({ children }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

import { FC, HTMLAttributes, ReactNode } from 'react';

import { cn } from '../lib/utils/cn';

interface PageWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const PageWrapper: FC<PageWrapperProps> = ({ className, children, ...rest }) => {
  return (
    <div className={cn('p-4 w-full h-full', className)} {...rest}>
      {children}
    </div>
  );
};

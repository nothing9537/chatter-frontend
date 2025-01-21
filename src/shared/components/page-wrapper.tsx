import { FC, HTMLAttributes, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetCurrentUser } from '@/entities/user';

import { cn } from '../lib/utils/cn';
import { RoutesPath } from '../consts/router-consts';

interface PageWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const PageWrapper: FC<PageWrapperProps> = ({ className, children, ...rest }) => {
  const { data } = useGetCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.currentUser) {
      navigate(RoutesPath.getRouteHome());
    }
  }, [data, navigate]);

  return (
    <div className={cn('p-4 w-full h-[calc(100%-48px)]', className)} {...rest}>
      {children}
    </div>
  );
};

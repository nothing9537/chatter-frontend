import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { RoutesPath } from '@/shared/consts/router-consts';

interface RequireAuthProps {
  predicate: boolean;
  children: ReactNode;
}

export const RequireAuth = ({ predicate, children }: RequireAuthProps) => {
  const location = useLocation();

  if (!predicate) {
    return <Navigate to={RoutesPath.getRouteSignIn()} state={{ from: location }} replace />;
  }

  return children;
};

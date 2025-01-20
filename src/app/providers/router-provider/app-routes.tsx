import { FC, ReactNode, Suspense, useEffect, useMemo } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { useGetCurrentUser } from '@/entities/user';
import { Loader } from '@/shared/ui/loader';
import { RoutesPath } from '@/shared/consts/router-consts';

import { RequireAuth } from './require-auth';
import RoutesConfig from './config/routes.config';

export const AppRoutes: FC = () => {
  const { data } = useGetCurrentUser();
  const navigate = useNavigate();

  const isAuthenticated = Boolean(data?.currentUser);

  useEffect(() => {
    if (data?.currentUser) {
      navigate(RoutesPath.getRouteHome());
    }
  }, [data, navigate]);

  const routes = useMemo(() => RoutesConfig.collect().map(({ path, element, authOnly, ...rest }) => {
    let content: ReactNode = (
      <Suspense fallback={<Loader className="size-16" />}>
        {element}
      </Suspense>
    );

    if (authOnly) {
      content = (
        <RequireAuth predicate={isAuthenticated}>
          {element}
        </RequireAuth>
      );
    }

    return (
      <Route
        key={path}
        path={path}
        element={content}
        {...rest}
      />
    );
  }), [isAuthenticated]);

  return (
    <Routes>
      {routes}
    </Routes>
  );
};

import { FC, ReactNode, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from '@/shared/ui/loader';

import { RequireAuth } from './require-auth';
import RoutesConfig from './config/routes.config';

export const AppRoutes: FC = () => {
  const routes = useMemo(() => RoutesConfig.collect().map(({ path, element, authOnly, ...rest }) => {
    let content: ReactNode = authOnly ? (
      <Suspense fallback={<Loader className="size-16" />}>
        {element}
      </Suspense>
    ) : element;

    if (authOnly) {
      content = (
        <RequireAuth predicate>
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
  }), []);

  return (
    <Routes>
      {routes}
    </Routes>
  );
};

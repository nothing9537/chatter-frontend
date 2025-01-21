import { FC, ReactNode, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useReactiveVar } from '@apollo/client';
import { Loader } from '@/shared/ui/loader';
import { authenticatedVar } from '@/shared/consts/authenticated';

import { PageWrapper } from '@/shared/components/page-wrapper';
import { RequireAuth } from './require-auth';
import RoutesConfig from './config/routes.config';

const PageFallback = () => {
  return (
    <PageWrapper className="flex">
      <Loader className="size-16 m-auto" />
    </PageWrapper>
  );
};

export const AppRoutes: FC = () => {
  const isAuthenticated = useReactiveVar(authenticatedVar);

  const routes = useMemo(() => RoutesConfig.collect().map(({ path, element, authOnly, ...rest }) => {
    let content: ReactNode = (
      <Suspense fallback={<PageFallback />}>
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

import { FC } from 'react';

import { Header } from '@/widgets/header';
import { MainLayout } from '@/shared/layouts/main-layout';

import { AppRoutes } from './providers/router-provider';
import { useAppInitialization } from './lib/hooks/use-app-initialization';

export const App: FC = () => {
  useAppInitialization();

  return (
    <MainLayout
      sidebar={null}
      header={<Header />}
      content={<AppRoutes />}
    />
  );
};

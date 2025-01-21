import { FC } from 'react';

import { Header } from '@/widgets/header';
import { MainLayout } from '@/shared/layouts/main-layout';

import { AppRoutes } from './providers/router-provider';

export const App: FC = () => {
  return (
    <MainLayout
      sidebar={null}
      header={<Header />}
      content={<AppRoutes />}
    />
  );
};

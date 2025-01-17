import { FC } from 'react';

import { AuthForm } from '@/features/auth-by-credentials';
import { PageWrapper } from '@/shared/components/page-wrapper';

export const SignInPage: FC = () => {
  return (
    <PageWrapper className="flex flex">
      <AuthForm className="m-auto" />
    </PageWrapper>
  );
};

export default SignInPage;

import { FC } from 'react';

import { PageWrapper } from '@/shared/components/page-wrapper';
import { SignUpForm } from '@/features/sing-up';

export const SignUpPage: FC = () => {
  return (
    <PageWrapper className="flex">
      <SignUpForm className="m-auto" />
    </PageWrapper>
  );
};

export default SignUpPage;

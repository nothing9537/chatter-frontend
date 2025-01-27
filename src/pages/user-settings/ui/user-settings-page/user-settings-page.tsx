import { FC } from 'react';

import { PageWrapper } from '@/shared/components/page-wrapper';
import { UserSettings } from '@/widgets/user-settings';
import { useGetCurrentUser } from '@/entities/user';
import { ContentWithLoader } from '@/shared/components/content-with-loader';

const UserSettingsPage: FC = () => {
  const { data, loading } = useGetCurrentUser();

  return (
    <PageWrapper>
      <ContentWithLoader
        content={data && <UserSettings user={data.currentUser} />}
        isLoading={loading}
      />
    </PageWrapper>
  );
};

export default UserSettingsPage;

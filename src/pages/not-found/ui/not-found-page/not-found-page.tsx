import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/shared/ui/button';
import { PageWrapper } from '@/shared/components/page-wrapper';
import { RoutesPath } from '@/shared/consts/router-consts';
import { Typography } from '@/shared/ui/typography';

export const NotFoundPage: FC = memo(() => {
  return (
    <PageWrapper className="flex items-center justify-center flex-col gap-4">
      <Typography variant="h1">
        Page Not Found. Please return to dashboard.
      </Typography>
      <Link to={RoutesPath.getRouteHome()}>
        <Button>
          Return
        </Button>
      </Link>
    </PageWrapper>
  );
});

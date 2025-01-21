import { FC } from 'react';
import { MessagesSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Typography } from '@/shared/ui/typography';
import { Stack } from '@/shared/ui/stack';
import { RoutesPath } from '@/shared/consts/router-consts';

export const Branding: FC = () => {
  return (
    <Stack className="w-fit" spacing={2}>
      <MessagesSquare />
      <Link to={RoutesPath.getRouteHome()}>
        <Typography variant="h3" style={{ fontFamily: 'monospace', letterSpacing: 8 }}>
          CHATTER
        </Typography>
      </Link>
    </Stack>
  );
};

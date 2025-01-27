import { FC } from 'react';
import { Upload } from 'lucide-react';

import { Stack } from '@/shared/ui/stack';
import { User } from '@/shared/generated/graphql';
import { Typography } from '@/shared/ui/typography';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Button } from '@/shared/ui/button';

import { useUploadImage } from '../lib/hooks/use-upload-image';

interface UserSettingsProps {
  user: User;
}

export const UserSettings: FC<UserSettingsProps> = ({ user }) => {
  const { fileRef, buttonHandler, uploadHandler, isSubmitting } = useUploadImage();

  return (
    <Stack direction="vertical" className="items-center h-full gap-8" spacing={8}>
      <Typography variant="h2">
        {user.username}
      </Typography>
      <Avatar className="size-64">
        <AvatarImage src={user.imageUrl} />
        <AvatarFallback className="text-8xl">
          {user.username.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <Button variant="outline" size="lg" onClick={buttonHandler} disabled={isSubmitting}>
        <Upload />
        Upload image
      </Button>
      <input type="file" hidden onChange={uploadHandler} ref={fileRef} />
    </Stack>
  );
};

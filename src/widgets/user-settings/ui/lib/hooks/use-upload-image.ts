import { useCallback, useRef, useState } from 'react';
import { AxiosError } from 'axios';

import { $API } from '@/shared/api/axios';
import { toast } from '@/shared/lib/hooks/use-toast';
import { HttpError } from '@/shared/api/api-error';
import { apolloClient } from '@/shared/api/apollo-client';
import { CURRENT_USER_DOCUMENT } from '@/entities/user';

export const useUploadImage = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const buttonHandler = useCallback(() => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  }, []);

  const uploadHandler = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();

    formData.append('file', e.target.files![0]);

    try {
      setIsSubmitting(true);

      await $API.post('/users/image', formData);

      toast({
        title: 'User Action',
        description: 'Image uploaded successfully.',
      });

      await apolloClient.refetchQueries({ include: [CURRENT_USER_DOCUMENT] });
    } catch (unknownError) {
      const error = unknownError as AxiosError<HttpError>;

      toast({
        title: 'User Action',
        description: error.response?.data.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return { fileRef, buttonHandler, uploadHandler, isSubmitting };
};

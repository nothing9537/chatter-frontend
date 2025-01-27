import { useCallback } from 'react';
import { AxiosError } from 'axios';

import { toast } from '@/shared/lib/hooks/use-toast';
import { apolloClient } from '@/shared/api/apollo-client';
import { $API } from '@/shared/api/axios';

interface LoginUserPayload {
  email: string;
  password: string;
}

export const useLoginUser = () => {
  const loginCb = useCallback(async (loginPayload: LoginUserPayload) => {
    try {
      await $API.post('/auth/login', loginPayload);

      await apolloClient.refetchQueries({ include: 'active' });
    } catch (unknownError) {
      const error = unknownError as AxiosError<{ statusCode: number, error: string, message: string }>;

      toast({
        title: 'User Action',
        description: error.response?.data?.message || 'Unknown error occurred.',
      });
    }
  }, []);

  return loginCb;
};

import { useCallback } from 'react';

import { toast } from '@/shared/lib/hooks/use-toast';
import { apolloClient } from '@/shared/api/apollo-client';

interface LoginUserPayload {
  email: string;
  password: string;
}

export const useLoginUser = () => {
  const loginCb = useCallback(async (loginPayload: LoginUserPayload) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginPayload),
    });

    if (!res.ok) {
      const errorMessage = res.status === 401 ? 'Credentials are not valid.' : 'Unknown error occurred.';

      toast({
        title: 'User Action',
        description: errorMessage,
      });

      return;
    }

    await apolloClient.refetchQueries({ include: 'active' });
  }, []);

  return loginCb;
};

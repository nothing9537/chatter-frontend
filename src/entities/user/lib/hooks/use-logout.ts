import { useCallback } from 'react';
import { onLogout } from '@/shared/lib/utils/apollo-client-utils';

export const useLogoutUser = () => {
  const logout = useCallback(async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
      method: 'POST',
    });

    if (res.ok) {
      onLogout();
    }

    return res;
  }, []);

  return logout;
};

import { useCallback } from 'react';
import { $API } from '@/shared/api/axios';
import { onLogout } from '@/shared/lib/utils/apollo-client-utils';
import { useUser } from '../../model/store/user-store';

export const useLogoutUser = () => {
  const logout = useCallback(async () => {
    await $API.post('/auth/logout');

    useUser.getState().setAuthToken(undefined);

    onLogout();
  }, []);

  return logout;
};

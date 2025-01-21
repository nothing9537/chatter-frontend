import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '@/shared/consts/router-consts';
import { apolloClient } from '@/shared/api/apollo-client';

export const useLogoutUser = () => {
  const navigate = useNavigate();

  const logout = useCallback(async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
      method: 'POST',
    });

    if (res.ok) {
      navigate(RoutesPath.getRouteSignIn());
      apolloClient.resetStore();
    }

    return res;
  }, [navigate]);

  return logout;
};

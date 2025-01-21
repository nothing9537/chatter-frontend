import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetCurrentUser } from '@/entities/user';
import { RoutesPath } from '@/shared/consts/router-consts';
import { authenticatedVar } from '@/shared/consts/authenticated';

export const useAppInitialization = () => {
  const { data } = useGetCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.currentUser) {
      navigate(RoutesPath.getRouteHome());
      authenticatedVar(true);
    }
  }, [data, navigate]);
};

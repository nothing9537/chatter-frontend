import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutesPath } from '@/shared/consts/router-consts';

export const useCatchEscapeAndRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigate(RoutesPath.getRouteHome());
      }
    };

    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, [navigate]);
};

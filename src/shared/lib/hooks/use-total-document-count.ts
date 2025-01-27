import { useCallback, useEffect, useState } from 'react';

import { $API } from '@/shared/api/axios';

import { toast } from './use-toast';

export const useTotalDocumentsCount = (endpoint: string, params?: Record<string, string>) => {
  const [totalCount, setCount] = useState<number | undefined>();

  const countDocuments = useCallback(async () => {
    try {
      const response = await $API.get<number>(endpoint, {
        params,
      });

      setCount(+response.data);
    } catch {
      toast({
        title: 'Documents Action',
        description: 'An error occurred while fetching the total count of documents',
      });
    }
  }, [endpoint, params]);

  useEffect(() => {
    countDocuments();
  }, [countDocuments]);

  return { totalCount };
};

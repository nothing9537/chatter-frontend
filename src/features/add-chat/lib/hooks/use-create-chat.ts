import { useCallback } from 'react';

import { CreateChatInput } from '@/shared/generated/graphql/graphql';
import { useCreateChat as useCreateChatEntity } from '@/entities/chat';
import { extractErrorMessage } from '@/shared/lib/utils/errors';
import { toast } from '@/shared/lib/hooks/use-toast';
import { useModal } from '@/shared/lib/hooks/use-modal';

export const useCreateChat = () => {
  const [createChat] = useCreateChatEntity();
  const { onClose } = useModal();

  const cb = useCallback(async (values: CreateChatInput) => {
    try {
      await createChat({ variables: { createChatInput: values } });
    } catch (error) {
      const errorMessage = extractErrorMessage(error);

      toast({
        title: 'User Action',
        className: 'capitalize',
        description: errorMessage || 'Unexpected error occurred.',
      });
    }

    onClose();
  }, [createChat, onClose]);

  return cb;
};

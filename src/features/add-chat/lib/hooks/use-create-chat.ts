import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCreateChat as useCreateChatEntity } from '@/entities/chat';
import { extractErrorMessage } from '@/shared/lib/utils/errors';
import { toast } from '@/shared/lib/hooks/use-toast';
import { useModal } from '@/shared/lib/hooks/use-modal';
import { RoutesPath } from '@/shared/consts/router-consts';
import { AddChatSchemaType } from '../../model/types/validation-schema-types';

export const useCreateChat = () => {
  const [createChat] = useCreateChatEntity();
  const navigate = useNavigate();
  const { onClose } = useModal();

  const cb = useCallback(async (values: AddChatSchemaType) => {
    try {
      const chat = await createChat({ variables: { createChatInput: values } });

      const chatId = chat.data?.createChat._id;

      if (chatId) {
        navigate(RoutesPath.getRouteHome(chatId));
      }
    } catch (error) {
      const errorMessage = extractErrorMessage(error);

      toast({
        title: 'Chat Action',
        className: 'capitalize',
        description: errorMessage || 'Unexpected error occurred.',
      });
    }

    onClose();
  }, [createChat, onClose, navigate]);

  return cb;
};

import { useCallback } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { useCreateMessage as useCreateMessageEntity } from '@/entities/message';
import { extractErrorMessage } from '@/shared/lib/utils/errors';
import { toast } from '@/shared/lib/hooks/use-toast';

import { SendMessageSchemaType } from '../../model/types/validation-schema-types';

export const useCreateMessage = (chatId: string, form: UseFormReturn<SendMessageSchemaType>) => {
  const [createMessage] = useCreateMessageEntity(chatId);

  const cb = useCallback(async (values: SendMessageSchemaType) => {
    try {
      await createMessage({ variables: { createMessageInput: { ...values, chatId } } });
      form.reset();
    } catch (error) {
      const errorMessage = extractErrorMessage(error);

      toast({
        title: 'Message Action',
        className: 'capitalize',
        description: errorMessage || 'Unexpected error occurred.',
      });
    }
  }, [createMessage, chatId, form]);

  return cb;
};

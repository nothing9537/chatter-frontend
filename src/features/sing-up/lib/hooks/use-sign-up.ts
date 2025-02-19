import { useCallback } from 'react';

import { useCreateUser, useLoginUser } from '@/entities/user';
import { extractErrorMessage } from '@/shared/lib/utils/errors';
import { toast } from '@/shared/lib/hooks/use-toast';

import { SignUpFormSchemaType } from '../../model/types/validation-schema-types';

export const useSignUp = () => {
  const [createUser] = useCreateUser();
  const login = useLoginUser();

  const signUpCb = useCallback(async (values: SignUpFormSchemaType) => {
    try {
      await createUser({ variables: { createUserInput: values } });
      await login(values);
    } catch (error) {
      const errorMessage = extractErrorMessage(error);

      toast({
        title: 'User Action',
        className: 'capitalize',
        description: errorMessage || 'Unexpected error occurred.',
      });
    }
  }, [createUser, login]);

  return signUpCb;
};

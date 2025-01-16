import { z } from 'zod';

import { SignUpFormSchema } from '../validation-schema/sign-up-form-schema';

export type SignUpFormSchemaType = z.infer<typeof SignUpFormSchema>;

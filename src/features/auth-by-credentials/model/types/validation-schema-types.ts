import { z } from 'zod';

import { AuthFormSchema } from '../validation-schema/auth-form-schema';

export type AuthFormSchemaType = z.infer<typeof AuthFormSchema>;

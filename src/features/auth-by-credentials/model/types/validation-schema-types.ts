import { z } from 'zod';

import { SignInSchema } from '../validation-schema/sing-in-form-schema';

export type SignInFormSchemaType = z.infer<typeof SignInSchema>;

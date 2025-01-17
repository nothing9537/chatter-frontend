import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.string().nonempty('Please fill this filed'),
  password: z.string().nonempty('Please fill this field'),
});

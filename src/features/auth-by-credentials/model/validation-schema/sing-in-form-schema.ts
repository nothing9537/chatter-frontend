import { z } from 'zod';

export const SignInSchema = z.object({
  username: z.string().nonempty('Please fill this filed'),
  password: z.string().nonempty('Please fill this field'),
});

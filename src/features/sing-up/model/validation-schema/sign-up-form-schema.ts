import { z } from 'zod';

export const SignUpFormSchema = z.object({
  email: z.string().email().nonempty('Please fill this filed'),
  password: z.string().nonempty('Please fill this field'),
  // confirmPassword: z.string().nonempty(),
});

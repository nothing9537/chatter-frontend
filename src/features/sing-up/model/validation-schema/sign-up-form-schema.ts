import { z } from 'zod';

export const SignUpFormSchema = z.object({
  username: z.string().nonempty('Please fill this filed'),
  password: z.string().nonempty('Please fill this field'),
  confirmPassword: z.string().nonempty(),
});

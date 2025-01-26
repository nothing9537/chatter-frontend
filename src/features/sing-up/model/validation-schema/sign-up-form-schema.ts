import { z } from 'zod';

export const SignUpFormSchema = z.object({
  email: z.string().email().nonempty('Please fill this filed'),
  username: z.string().nonempty('Please fill this field'),
  password: z.string().nonempty('Please fill this field'),
});

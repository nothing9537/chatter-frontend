import { z } from 'zod';

export const AddChatSchema = z.object({
  isPrivate: z.boolean(),
});

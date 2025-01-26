import { z } from 'zod';

export const AddChatSchema = z.object({
  name: z.string(),
});

import { z } from 'zod';

export const AddChatSchema = z.object({
  isPrivate: z.boolean(),

  name: z.string().optional(),
  userIds: z.string().array().optional(),
});

import { z } from 'zod';

import { AddChatSchema } from '../validation-schema/add-chat-schema';

export type AddChatSchemaType = z.infer<typeof AddChatSchema>;

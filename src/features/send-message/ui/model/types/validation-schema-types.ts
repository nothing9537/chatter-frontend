import { z } from 'zod';

import { SendMessageSchema } from '../validation-schema/send-message-schema';

export type SendMessageSchemaType = z.infer<typeof SendMessageSchema>;

import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from '@/shared/ui/form';
import { Stack } from '@/shared/ui/stack';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/lib/utils/cn';
import { Separator } from '@/shared/ui/separator';
import { Textarea } from '@/shared/ui/textarea';
import { FormFieldWrapper } from '@/shared/components/form-field-wrapper';

import { ContentWithLoader } from '@/shared/components/content-with-loader';
import { SendMessageSchema } from '../model/validation-schema/send-message-schema';
import { SendMessageSchemaType } from '../model/types/validation-schema-types';
import { useCreateMessage } from '../lib/hooks/use-create-message';

interface SendMessageFormProps {
  className?: string;
  chatId: string;
}

export const SendMessageForm: FC<SendMessageFormProps> = memo(({ className, chatId }) => {
  const form = useForm<SendMessageSchemaType>({
    resolver: zodResolver(SendMessageSchema),
    defaultValues: { content: '' },
    mode: 'onSubmit',
  });

  const onSubmit = useCreateMessage(chatId, form);

  return (
    <Form {...form}>
      <Stack
        as="form"
        className={cn('border rounded-md overflow-hidden px-4 py-2', className)}
        direction="horizontal"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormFieldWrapper form={form} name="content">
          {({ field, formState }) => (
            <Textarea
              {...field}
              disabled={formState.isSubmitting}
              placeholder="Message"
              className="border-none shadow-none min-h-9 h-9 max-h-40 overflow scrollbar-hide"
            />
          )}
        </FormFieldWrapper>
        <Separator className="h-9 w-[1px]" />
        <Button size="icon" className="shrink-0" type="submit">
          <ContentWithLoader content={<Send />} isLoading={form.formState.isSubmitting} />
        </Button>
      </Stack>
    </Form>
  );
});

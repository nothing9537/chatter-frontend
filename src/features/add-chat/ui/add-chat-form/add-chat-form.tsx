import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormFieldWrapper } from '@/shared/components/form-field-wrapper';
import { Form } from '@/shared/ui/form';
import { Stack } from '@/shared/ui/stack';
import { ContentWithLoader } from '@/shared/components/content-with-loader';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

import { AddChatSchemaType } from '../../model/types/validation-schema-types';
import { AddChatSchema } from '../../model/validation-schema/add-chat-schema';
import { useCreateChat } from '../../lib/hooks/use-create-chat';

export const AddChatForm: FC = () => {
  const form = useForm<AddChatSchemaType>({
    resolver: zodResolver(AddChatSchema),
    defaultValues: { name: '' },
  });

  const onSubmit = useCreateChat();

  return (
    <Form {...form}>
      <Stack as="form" onSubmit={form.handleSubmit(onSubmit)} direction="vertical" spacing={4}>
        <FormFieldWrapper form={form} name="name" label="Name">
          {({ field, formState }) => (
            <Input
              {...field}
              value={field.value as never}
              checked={field.value as never}
              disabled={formState.isSubmitting}
              placeholder="Chat name, for ex. 'DeathCore music'"
            />
          )}
        </FormFieldWrapper>
        <Button type="submit" disabled={form.formState.isSubmitting}>
          <ContentWithLoader content="Save" isLoading={form.formState.isSubmitting} />
        </Button>
      </Stack>
    </Form>
  );
};

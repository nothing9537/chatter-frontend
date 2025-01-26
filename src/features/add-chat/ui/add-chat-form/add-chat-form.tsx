import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormFieldWrapper } from '@/shared/components/form-field-wrapper';
import { Form } from '@/shared/ui/form';
import { Stack } from '@/shared/ui/stack';
// import { Switch } from '@/shared/ui/switch';
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
        {/* <FormFieldWrapper form={form} name="isPrivate" label="Private" classNames={{ formItem: 'flex items-center gap-2' }}>
          {({ field, formState }) => (
            <Switch
              {...field}
              value={field.value as never}
              checked={field.value as never}
              disabled={formState.isSubmitting}
              onCheckedChange={field.onChange}
            />
          )}
        </FormFieldWrapper> */}
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
        <Button type="submit">
          Save
        </Button>
      </Stack>
    </Form>
  );
};

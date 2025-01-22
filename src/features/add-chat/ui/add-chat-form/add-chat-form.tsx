import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from '@/shared/ui/form';
import { Stack } from '@/shared/ui/stack';

import { FormFieldWrapper } from '@/shared/components/form-field-wrapper';
import { Switch } from '@/shared/ui/switch';
import { Button } from '@/shared/ui/button';
import { AddChatSchemaType } from '../../model/types/validation-schema-types';
import { AddChatSchema } from '../../model/validation-schema/add-chat-schema';

interface AddChatFormProps {
  onSubmit: (values: AddChatSchemaType) => Promise<void>;
}

export const AddChatForm: FC<AddChatFormProps> = ({ onSubmit }) => {
  const form = useForm<AddChatSchemaType>({
    resolver: zodResolver(AddChatSchema),
    defaultValues: { isPrivate: false },
  });

  return (
    <Form {...form}>
      <Stack as="form" onSubmit={form.handleSubmit(onSubmit)} direction='vertical' spacing={2}>
        <FormFieldWrapper form={form} name="isPrivate" label="Private" classNames={{ formItem: 'flex items-center gap-2' }}>
          {({ field, formState }) => (
            <Switch
              {...field}
              value={field.value as never}
              disabled={formState.isSubmitting}
              checked={field.value}
              onCheckedChange={field.onChange}
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

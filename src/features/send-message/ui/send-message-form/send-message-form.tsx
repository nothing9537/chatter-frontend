import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

import { Form } from '@/shared/ui/form';
import { Stack } from '@/shared/ui/stack';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/lib/utils/cn';
import { Separator } from '@/shared/ui/separator';
import { Textarea } from '@/shared/ui/textarea';

interface SendMessageFormProps {
  className?: string;
}

export const SendMessageForm: FC<SendMessageFormProps> = ({ className }) => {
  const form = useForm();

  return (
    <Form {...form}>
      <Stack as="form" className={cn('border rounded-md overflow-hidden px-4 py-2', className)} direction="horizontal">
        <Textarea placeholder="Message" className="border-none shadow-none min-h-10 h-9 max-h-40" />
        <Separator className="h-9 w-[1px]" />
        <Button size="icon" className="shrink-0">
          <Send />
        </Button>
      </Stack>
    </Form>
  );
};

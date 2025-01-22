import { FC, useCallback } from 'react';
import { Plus } from 'lucide-react';
import { useModal } from '@/shared/lib/hooks/use-modal';
import { Button } from '@/shared/ui/button';

export const AddChatButton: FC = () => {
  const { onOpen } = useModal();

  const onClick = useCallback(() => {
    onOpen('addNewChat');
  }, [onOpen]);

  return (
    <Button onClick={onClick} className="w-full" variant="outline">
      <Plus />
      Add new chat
    </Button>
  );
};

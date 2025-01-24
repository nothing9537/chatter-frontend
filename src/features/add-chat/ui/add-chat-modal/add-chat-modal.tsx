import { FC } from 'react';

import { useModal } from '@/shared/lib/hooks/use-modal';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/shared/ui/dialog';

import { AddChatForm } from '../add-chat-form/add-chat-form';

export const AddChatModal: FC = () => {
  const { isOpen, type, onClose } = useModal();

  const isModalOpen = type === 'addNewChat' && isOpen;

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Add new chat
          </DialogTitle>
          <DialogDescription>
            In this form, you can join an existing public chat room, or create a private chat room between you and another user.
          </DialogDescription>
        </DialogHeader>
        <AddChatForm />
      </DialogContent>
    </Dialog>
  );
};

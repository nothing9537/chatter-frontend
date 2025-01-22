import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface ModalData { }

export type ModalType = 'addNewChat';

export interface ModalStore {
  /**
   * Modal type, which is used to determine which modal should be opened.
  */
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType, modalData?: ModalData) => void;
  /**
   * Closes current opened modal, which regulated by `type` and `isOpen` properties and store.
  */
  onClose: () => void;
  modalData: ModalData | null;
}

export const useModal = create<ModalStore>()(devtools((set) => ({
  isOpen: false,
  type: null,
  modalData: null,
  onOpen: (type, modalData?: ModalData) => set({ type, isOpen: true, modalData: modalData || null }),
  onClose: () => set({ type: null, isOpen: false, modalData: null }),
}), { name: 'Modal Store' }));

/**
 * You can pass a generic type to this hook to get the modal data with the specified type.
 * @returns Modal store with generic modal data type.
 */
export const useGenericModal = <T extends ModalData = ModalData>() => {
  const { modalData, ...args } = useModal();

  return { ...args, modalData: modalData as T };
};

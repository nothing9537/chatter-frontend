import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { UserStore } from '../types/user-store-types';

export const useUser = create<UserStore>()(devtools((set) => ({
  authToken: undefined,

  setAuthToken: (authToken) => set({ authToken }),
}), { name: 'User Store' }));

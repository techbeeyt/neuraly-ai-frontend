import { create, StoreApi, UseBoundStore } from "zustand";

export interface MobileMenuState {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  isChatListOpen: boolean;
  toggleChatList: () => void;
  closeChatList: () => void;
}

const useMobileMenu: UseBoundStore<StoreApi<MobileMenuState>> = create(
  (set) => ({
    isOpen: false,
    toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
    closeMenu: () => set({ isOpen: false }),
    isChatListOpen: false,
    toggleChatList: () =>
      set((state) => ({ isChatListOpen: !state.isChatListOpen })),
    closeChatList: () => set({ isChatListOpen: false }),
  })
);

export default useMobileMenu;

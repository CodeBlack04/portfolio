import { create } from "zustand";

interface ContactModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useContactModal = create<ContactModalStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}))

export default useContactModal;
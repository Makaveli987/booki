import { create } from "zustand";

type LoadingDialogStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useLoadingDialog = create<LoadingDialogStore>((set) => ({
  isOpen: false,
  open: () =>
    set({
      isOpen: true,
    }),
  close: () => {
    set({
      isOpen: false,
    });
  },
}));

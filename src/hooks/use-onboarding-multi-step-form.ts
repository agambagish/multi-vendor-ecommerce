import { create } from "zustand";

interface Store {
  vpa: string;
  name: string;
  setVpa: (value: string) => void;
}

export const useOnboardingMultiStepForm = create<Store>(set => ({
  vpa: "",
  name: "",
  setVpa: value => set({ vpa: value }),
}));

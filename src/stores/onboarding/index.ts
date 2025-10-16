"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Swiper as SwiperType } from "swiper";

interface OnboardingState {
  isOpen: boolean;
  currentStep: number;
  swiper: SwiperType | null;
  setSwiper: (swiper: SwiperType) => void;
  goToStep: (index: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  close: () => void;
  skip: () => void;
}

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set, get) => ({
      isOpen: true, // mặc định true cho lần đầu
      currentStep: 0,
      swiper: null,
      setSwiper: (swiper) => {
        set({ swiper });
        swiper.on("slideChange", () =>
          set({ currentStep: swiper.activeIndex })
        );
      },
      goToStep: (index) => {
        set({ currentStep: index });
        get().swiper?.slideTo(index);
      },
      nextStep: () => {
        const { currentStep, goToStep } = get();
        goToStep(currentStep + 1);
      },
      prevStep: () => {
        const { currentStep, goToStep } = get();
        goToStep(Math.max(0, currentStep - 1));
      },
      close: () => set({ isOpen: false }),
      skip: () => set({ isOpen: false }),
    }),
    {
      name: "onboarding-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ isOpen: state.isOpen }),
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.error("rehydrate error", error);
        } else {
          console.log("rehydrated state:", state);
        }
      },
    }
  )
);

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
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set, get) => ({
      isOpen: true,
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
      _hasHydrated: false,
      setHasHydrated: (state) => set({ _hasHydrated: state }),
    }),
    {
      name: "onboarding-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ isOpen: state.isOpen }),
      skipHydration: true,
      onRehydrateStorage: () => {
        return () => {
          // chắc chắn set sau khi rehydrate
          useOnboardingStore.setState({ _hasHydrated: true });
        };
      },
    }
  )
);

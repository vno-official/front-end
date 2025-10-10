"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

type OnboardingContextType = {
  isOpen: boolean;
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  skip: () => void;
  close: () => void;
  goToStep: (index: number) => void;
  bindSwiper: (swiper: SwiperType) => void;
};

const OnboardingContext = createContext<OnboardingContextType | null>(null);

export const OnboardingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const hasOnboarded = localStorage.getItem("hasOnboarded");
    if (!hasOnboarded) setIsOpen(true);
  }, []);

  const goToStep = (index: number) => {
    setCurrentStep(index);
    swiperRef.current?.slideTo(index);
  };

  const nextStep = () => goToStep(currentStep + 1);
  const prevStep = () => goToStep(Math.max(0, currentStep - 1));

  const close = () => {
    setIsOpen(false);
    localStorage.setItem("hasOnboarded", "true");
  };

  const skip = close;

  const bindSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    swiper.on("slideChange", () => {
      setCurrentStep(swiper.activeIndex);
    });
  };

  return (
    <OnboardingContext.Provider
      value={{ isOpen, currentStep, nextStep, prevStep, skip, close, goToStep, bindSwiper }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error("useOnboarding must be used within OnboardingProvider");
  return ctx;
};

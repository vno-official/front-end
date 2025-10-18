"use client";
import { useOnboardingStore } from "@/stores/onboarding";
import OnBoardingBody from "./body";
import OnBoardingBottom from "./bottom-actions";
import OnBoardingTopBar from "./top-bar";
import { useEffect } from "react";
import { useRouter } from "@/lib/navigation";

const OnBoardingScreen = () => {
  const router = useRouter();
  const { isOpen, skip } = useOnboardingStore();

  useEffect(() => {
    if (!isOpen) {
      skip();
      router.push("/");
    }
  }, [isOpen, skip]);

  if (!isOpen) return null;

  return (
    <div className=" max-w-lg mx-auto h-dvh flex flex-col">
      <OnBoardingTopBar />
      <OnBoardingBody />
      <OnBoardingBottom />
    </div>
  );
};

export default OnBoardingScreen;

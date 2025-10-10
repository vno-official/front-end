"use client";
import OnBoardingBody from "./body";
import OnBoardingBottom from "./bottom-actions";
import { OnboardingProvider } from "./context";
import OnBoardingTopBar from "./top-bar";

const OnBoarding = () => {
  return (
    <OnboardingProvider>
      <div className="h-dvh flex flex-col">
        <OnBoardingTopBar />
        <OnBoardingBody />
        <OnBoardingBottom />
      </div>
    </OnboardingProvider>
  );
};

export default OnBoarding;

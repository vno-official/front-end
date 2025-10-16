"use client";
import OnBoardingBody from "./body";
import OnBoardingBottom from "./bottom-actions";
import OnBoardingTopBar from "./top-bar";

const OnBoardingScreen = () => {

  return (
    <div className=" max-w-lg mx-auto h-dvh flex flex-col">
      <OnBoardingTopBar />
      <OnBoardingBody />
      <OnBoardingBottom />
    </div>
  );
};

export default OnBoardingScreen;

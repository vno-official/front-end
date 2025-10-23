import React from "react";
import {
  HomeScreenMainBoard,
  HomeScreenRecently,
} from "./components";

const HomePageScreen = () => {
  return (
    <div className="min-h-screen p-4 space-y-6">
      <HomeScreenMainBoard />
      <HomeScreenRecently />
    </div>
  );
};

export default HomePageScreen;

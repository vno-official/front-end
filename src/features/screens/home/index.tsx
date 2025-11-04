import React from "react";
import {
  HomeScreenActivities,
  HomeScreenChecklist,
  HomeScreenMainBoard,
  HomeScreenRecently,
} from "./components";

const HomePageScreen = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-8 space-y-10">
        <HomeScreenMainBoard />
        <HomeScreenRecently />
      </div>
      <div className="col-span-12 lg:col-span-4 space-y-10">
        <HomeScreenChecklist />
        <HomeScreenActivities />
      </div>
    </div>
  );
};

export default HomePageScreen;

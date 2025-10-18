import { Loader2 } from "lucide-react";
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="relative flex h-screen w-full overflow-hidden items-center justify-center">
      <Loader2 className="animate-spin" />
    </div>
  );
};

export default LoadingScreen;

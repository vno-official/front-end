"use client";

import { createContext } from "react";

export interface AppContextType {
  isAppReady: boolean;
  showOnboarding: boolean;
  completeOnboarding: () => void;
}

export const AppContext = createContext<AppContextType>({
  isAppReady: false,
  showOnboarding: false,
  completeOnboarding: () => {},
});

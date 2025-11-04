import { Toaster } from "@/components/ui/sonner";
import { ClientBootstraping } from "@/features/components";
import React, { PropsWithChildren } from "react";
type AppWrapperProps = PropsWithChildren;
const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <>
      <ClientBootstraping />
      {children}
      <Toaster />
    </>
  );
};

export default AppWrapper;

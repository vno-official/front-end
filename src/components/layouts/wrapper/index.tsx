import { ClientBootstraping } from "@/features/components";
import React, { PropsWithChildren } from "react";
type AppWrapperProps = PropsWithChildren;
const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <main className="">
      <ClientBootstraping>{children}</ClientBootstraping>
    </main>
  );
};

export default AppWrapper;

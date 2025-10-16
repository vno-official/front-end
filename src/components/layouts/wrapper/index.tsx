import { ClientBootstraping } from "@/features/components";
import React, { PropsWithChildren } from "react";
type AppWrapperProps = PropsWithChildren;
const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <main className="container mx-auto max-w-lg md:border-x-8 md:border-primary">
      <ClientBootstraping>{children}</ClientBootstraping>
    </main>
  );
};

export default AppWrapper;

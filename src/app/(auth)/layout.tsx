import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren;
const AuthenticationLayout = ({ children }: Props) => {
  return (
    <div className="h-dvh w-full flex items-center justify-center px-4">
      {children}
    </div>
  );
};

export default AuthenticationLayout;

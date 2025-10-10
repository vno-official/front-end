import React, { PropsWithChildren } from "react";
type SiteBodyProps = PropsWithChildren;
const SiteBody = ({ children }: SiteBodyProps) => {
  return <main className="container mx-auto max-w-lg md:border-x-8 md:border-b-8 md:border-primary">{children}</main>;
};

export default SiteBody;

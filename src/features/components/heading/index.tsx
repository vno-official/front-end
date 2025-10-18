import { Typography } from "@/components/common/typography";
import React, { PropsWithChildren } from "react";
interface HeadingSectionProps extends PropsWithChildren {
  title?: string;
  right?: React.ReactNode;
}
const HeadingSection = ({ children, right, title }: HeadingSectionProps) => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <Typography variant="large">{title}</Typography>
        {right}
      </div>
      {children}
    </div>
  );
};

export default HeadingSection;

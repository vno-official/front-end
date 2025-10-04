"use client";
import React, { ComponentProps, FC } from "react";
import { useRouter } from "../hooks";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, HomeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip } from "@/components/ui/tooltip";
import { Typography } from "@/components/common/typography";

interface AppTopbarProps extends ComponentProps<"div"> {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  canBack?: boolean;
  canGoHome?: boolean;
  onBack?: () => void;
}

const AppTopbar: FC<AppTopbarProps> = ({
  center: centerFromProps,
  left: leftFromProps,
  right: rightFromProps,
  className,
  canBack = true,
  canGoHome = true,
  onBack,
  title,
  ...props
}) => {
  const router = useRouter();
  const handleBack = onBack ?? router.back;

  const center = centerFromProps ? (
    centerFromProps
  ) : title ? (
    <Typography as={"h2"} variant="h4">
      {title}
    </Typography>
  ) : null;

  const left = leftFromProps ? (
    leftFromProps
  ) : canBack ? (
    <Tooltip>
      <Button size={"icon"} variant={"ghost"} onClick={handleBack}>
        <ArrowLeftIcon className="size-6" />
      </Button>
    </Tooltip>
  ) : null;

  const right = rightFromProps ? (
    rightFromProps
  ) : canGoHome ? (
    <Button size={"icon"} variant={"ghost"}>
      <HomeIcon className="size-5" />
    </Button>
  ) : null;

  return (
    <>
      <div className="h-[66px]" />

      <div
        className={cn(
          "bg-background fixed top-0 left-0 z-[100] w-full py-2",
          className
        )}
        {...props}
      >
        <div className="relative flex h-[50px] items-center justify-between gap-2 px-4">
          <div>{left}</div>

          <div
            className={cn(
              "absolute top-1/2 left-1/2 w-[calc(100%-140px)] -translate-1/2",
              {
                "left-[calc(50%-35px)] w-[calc(100%-70px)] px-6": !left,
              }
            )}
          >
            {center}
          </div>

          <div>{right}</div>
        </div>
      </div>
    </>
  );
};

export default AppTopbar;

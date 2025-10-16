"use client";
import React, { ComponentProps, FC } from "react";
import { useRouter } from "../hooks";
import { Button } from "@/components/ui/button";
import { ChevronLeft, HomeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
      <TooltipTrigger asChild>
        <Button
          variant={"none"}
          className="gap-0.5 !p-0 text-muted-foreground hover:text-primary"
          onClick={handleBack}
        >
          <ChevronLeft className="size-5" />
          Back
        </Button>
      </TooltipTrigger>
      <TooltipContent className="z-[100]">
        <Typography variant="small">Back</Typography>
      </TooltipContent>
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
      <div className="h-[50px]" />

      <div
        className={cn(
          "bg-background fixed top-0 left-0 z-[100] w-full",
          className
        )}
        {...props}
      >
        <div className="relative flex h-[50px] items-center max-w-lg mx-auto md:border-x-8 md:border-t-8 md:border-primary justify-between gap-2 px-4">
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

"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AppTopbar } from "@/lib/navigation";
import React from "react";
import { useOnboarding } from "./context";
import { slides } from "./config";
import { cn } from "@/lib/utils";

const OnboardingScreenTopBar = () => {
  const { currentStep, skip, goToStep } = useOnboarding();

  return (
    <AppTopbar
      center={
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground">
          {slides.map((_, index) => (
            <Badge
              key={index}
              onClick={() => goToStep(index)}
              variant={index === currentStep ? "default" : "text"}
              className={cn(
                "size-6 rounded-full px-1 font-mono tabular-nums cursor-pointer transition-all duration-200 ease-in hover:bg-muted",
                {
                  "bg-primary text-primary-foreground hover:bg-primary pointer-events-none": index === currentStep,
                }
              )}
            >
              {index + 1}
            </Badge>
          ))}
        </div>
      }
      right={
        <Button
          onClick={skip}
          variant="none"
          className="p-0 text-muted-foreground opacity-50 hover:opacity-100 hover:text-primary"
        >
          Skip
        </Button>
      }
    />
  );
};

export default OnboardingScreenTopBar;

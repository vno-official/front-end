import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const OnboardingScreenBottom = () => {
  return (
    <div className="flex items-center gap-4 p-4">
      <Button
        size={"lg"}
        className="rounded-full flex-1 h-[56px] font-semibold"
        as={Link}
        href="/login"
      >
        Log in
      </Button>
      <Button
        size={"lg"}
        variant={"secondary"}
        className="rounded-full flex-1 h-[56px] font-semibold"
        as={Link}
        href="/register"
      >
        Register
      </Button>
    </div>
  );
};

export default OnboardingScreenBottom;

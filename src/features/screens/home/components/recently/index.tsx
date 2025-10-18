import AnimatedContent from "@/components/animate-content";
import { HeadingSection } from "@/features/components";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
const HomeScreenRecently = () => {
  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={1.2}
      ease="bounce.out"
      animateOpacity
      threshold={0.2}
      delay={0.3}
    >
      <HeadingSection title="Recently note">
        <div className="columns-2 md:columns-3 2xl:columns-4 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="mb-4 break-inside-avoid">
              <Skeleton
                className={cn("bg-muted-foreground/20", {
                  "h-[200px]": index % 2 === 0,
                  "h-[150px]": index % 2 !== 0,
                })}
              />
            </div>
          ))}
        </div>
      </HeadingSection>
    </AnimatedContent>
  );
};

export default HomeScreenRecently;

import AnimatedContent from "@/components/animate-content";
import NumberFlow from "@number-flow/react";
import { Button } from "@/components/ui/button";
import { HeadingSection } from "@/features/components";
import Image from "next/image";
import React from "react";
const workSpaces = [
  {
    id: "1",
    name: "Homeworks",
    description: "This is my workspace",
    image: "/images/folders/dock.png",
    totalNotes: 12,
  },
  {
    id: "2",
    name: "Sports",
    description: "This is my workspace",
    image: "/images/folders/dock.png",
    totalNotes: 30,
  },
  {
    id: "3",
    name: "Meetings",
    description: "This is my workspace",
    image: "/images/folders/dock.png",
    totalNotes: 12,
  },
];
const HomeScreenMainBoard = () => {
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
      <HeadingSection
        title="My folders"
        right={
          <Button variant={"none"} size={"sm"}>
            Filter by
          </Button>
        }
      >
        <div className="grid grid-cols-3 gap-4">
          {workSpaces.map((workspace) => (
            <div key={workspace.id} className="flex flex-col gap-1">
              <div className="relative size-[100px]">
                <Image src={workspace.image} fill alt={workspace.name} />
                <div className="absolute right-3 bottom-3">
                  <NumberFlow
                    value={workspace.totalNotes}
                    className="mt-8 font-semibold text-[#4392f2]"
                  />
                </div>
              </div>
              <span className="text-sm font-medium">
                {workspace.name}
              </span>
            </div>
          ))}
        </div>
      </HeadingSection>
    </AnimatedContent>
  );
};

export default HomeScreenMainBoard;

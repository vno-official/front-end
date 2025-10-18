"use client";
import { cn } from "@/lib/utils";
import {
  CalendarRangeIcon,
  FileTextIcon,
  PlusIcon,
  SearchIcon,
  UserCircleIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import React, { ComponentProps, useMemo } from "react";
import "./style.css";
import Link from "./link";
import { Button } from "@/components/ui/button";
type AppBottombarProps = ComponentProps<"div">;


const navigations = [
  {
    name: "Home",
    href: "/",
    icon: FileTextIcon,
  },
  {
    name: "Search",
    href: "/search",
    icon: SearchIcon,
  },
  {
    name: "",
    href: "",
    isHidden: true,
  },
  {
    name: "Schedule",
    href: "/schedule",
    icon: CalendarRangeIcon,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: UserCircleIcon,
  },
];

const AppBottombar = ({ className, ...props }: AppBottombarProps) => {
  const pathname = usePathname();
  const shouldShow = useMemo(
    () => navigations.some((navigation) => navigation.href === pathname),
    [pathname]
  );
  return (
    <>
      <div
        className={cn(
          "h-[75px] transition-all duration-500",
          !shouldShow && "h-0"
        )}
      />

      <svg width="0" height="0">
        <defs>
          <clipPath id="bottomBarClip" clipPathUnits="objectBoundingBox">
            <path
              d="M375 92H0V0H140C146.627 0 151.804 5.52004 153.972 11.7827C158.853 25.8784 172.244 36 188 36C203.756 36 217.147 25.8784 222.028 11.7827C224.196 5.52004 229.373 0 236 0H375V92Z"
              transform="scale(0.00267, 0.0154)"
            />
          </clipPath>
        </defs>
      </svg>

      <nav
        className={cn(
          "bg-background fixed -bottom-[1px] left-1/2 z-100 flex w-full max-w-lg -translate-x-1/2 flex-col transition-all duration-300 ease-in-out shadow-[0_0_20px_rgba(0,0,0,0.1)]",
          "md:border-x-8 md:border-primary",
          !shouldShow && "translate-y-full",
          className
        )}
        {...props}
      >
        <div className="relative">
          <div className="h-[70px] bg-white grid grid-cols-5 px-4">
            {navigations.map((navigation) => {
              const Icon = navigation.icon;
              const isActive = navigation.href === pathname;
              const isHidden = navigation.isHidden;
              if (!Icon) return <div key={navigation.name} />;
              return (
                <Link
                  key={navigation.name}
                  href={navigation.href}
                  className={cn(
                    "flex items-center text-muted-foreground justify-center",
                    isActive && "text-primary",
                    isHidden && "hidden"
                  )}
                >
                  <Icon className={cn("size-6", {})} />
                </Link>
              );
            })}
          </div>

          <div className="!absolute -top-10 left-1/2 -translate-x-1/2">
            <Button
              size={"icon"}
              className={cn(
                "size-20 border-8 border-background bg-primary rounded-full flex items-center justify-center",
                {
                  "pointer-events-none opacity-0": !shouldShow,
                  "translate-y-full": !shouldShow,
                }
              )}
            >
              <motion.div
                animate={{ rotate: [0, 360, 370, 355, 365, 360, 360] }}
                transition={{
                  duration: 6,
                  times: [0, 0.15, 0.18, 0.2, 0.22, 0.25, 1],
                  // 0–0.15 (~0.9s) xoay 1 vòng
                  // 0.15–0.25 (~0.6s) rung qua lại
                  // 0.25–1 (~4.5s) đứng yên
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <PlusIcon className="text-white size-7" />
              </motion.div>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppBottombar;

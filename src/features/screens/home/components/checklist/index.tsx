import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { HeadingSection } from "@/features/components";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";

const tasks = [
  {
    id: "task-1",
    title: "Work on the plan",
    status: "pending",
    timeLeft: "3 hours left",
    isStarred: true,
    isCompleted: false,
    color: "#7C3AED",
  },
  {
    id: "task-2",
    title: "Collect feedback",
    status: "overdue",
    timeLeft: "1 hour overdue",
    isStarred: false,
    isCompleted: true,
    color: "#7C3AED",
  },
  {
    id: "task-3",
    title: "Analyse test results",
    status: "pending",
    timeLeft: "16 hours left",
    isStarred: false,
    isCompleted: false,
    color: "#8B5CF6",
  },
  {
    id: "task-4",
    title: "Conclusion",
    status: "pending",
    timeLeft: "1 day left",
    isStarred: false,
    isCompleted: false,
    color: "#A78BFA",
  },
];

const HomeScreenChecklist = () => {
  return (
    <div>
      <HeadingSection title="Tasks">
        <div className="rounded-lg border border-border bg-card p-4 space-y-1">
          {tasks.map((t) => (
            <div
              key={t.id}
              className={cn("flex items-center justify-between p-2 rounded-lg")}
            >
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={t.isCompleted}
                  id={t.id}
                  className="size-4"
                />
                <Label
                  htmlFor={t.id}
                  className="flex flex-col gap-0 items-start"
                >
                  <span className={cn("text-base font-semibold")}>{t.title}</span>
                  <span
                    className={cn("text-xs text-muted-foreground", {
                      "line-through": t.isCompleted,
                    })}
                  >
                    {t.timeLeft}
                  </span>
                </Label>
              </div>
              <Star
                size={16}
                className={
                  t.isStarred
                    ? "fill-purple-500 text-purple-500"
                    : "text-muted-foreground"
                }
              />
            </div>
          ))}
        </div>
      </HeadingSection>
    </div>
  );
};

export default HomeScreenChecklist;

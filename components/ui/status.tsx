import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

export default function Status({
  percent,
  icon = true,
}: {
  percent: number;
  icon?: boolean;
}) {
  return (
    <div
      className={cn("text-sm flex items-center gap-x-1", {
        "text-green9": percent > 0,
        "text-red-500": percent < 0,
      })}
    >
      {icon && (
        <div
          className={cn(
            "flex h-4 w-4 items-center justify-center rounded-full text-green9",
            { "bg-green4": percent > 0, "bg-red9": percent < 0 },
          )}
        >
          <ArrowUp size={12} />
        </div>
      )}
      {percent} %
    </div>
  );
}

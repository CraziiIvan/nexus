import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function Status({
  percent,
}: {
  percent: number;
}) {

  const isPositive = percent > 0;

  return (
    <div
      className={cn("text-sm flex items-center gap-x-1", {
        "text-green9": isPositive,
        "text-red9": !isPositive,
      })}
    >
        <div
          className={cn(
            "flex h-4 w-4 items-center justify-center rounded-full ",
            { "bg-green4": isPositive, "bg-red4": !isPositive },
          )}
        >
          { isPositive ? <ArrowUp size={12} /> : <ArrowDown size={12} /> }
        </div>
      {percent} %
    </div>
  );
}

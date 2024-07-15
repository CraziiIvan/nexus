import { cn } from "@/lib/utils";
import { ArrowUpRight } from "iconoir-react";

export default function Status({percent, icon=true}: {percent: number, icon?: boolean}) {
  return (
    <div className={cn("flex items-center gap-x-1", {"text-green-500": percent > 0, "text-red-500": percent < 0})}>
    { icon && <ArrowUpRight fontSize={10} />}
    {percent} %
  </div>
  )
}

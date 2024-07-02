import { ArrowUpRight } from "iconoir-react";

export default function Status({percent, icon=true}: {percent: number, icon?: boolean}) {
  return (
    <div className=" flex items-center text-sm gap-x-1 text-green-500">
    { icon && <ArrowUpRight fontSize={10} />}
    {percent} %
  </div>
  )
}

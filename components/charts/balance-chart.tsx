"use client";

import {
  Area,
  AreaChart,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { useState } from "react";
const chartData = [
  { date: "2024-07-01", totalBalance: 222 },
  { date: "2024-07-02", totalBalance: 97 },
  { date: "2024-07-03", totalBalance: 167 },
  { date: "2024-07-04", totalBalance: 242 },
  { date: "2024-07-05", totalBalance: 373 },
  { date: "2024-07-06", totalBalance: 301 },
  { date: "2024-07-07", totalBalance: 245 },
  { date: "2024-07-08", totalBalance: 409 },
  { date: "2024-07-09", totalBalance: 59 },
  { date: "2024-07-10", totalBalance: 261 },
  { date: "2024-07-11", totalBalance: 327 },
  { date: "2024-07-12", totalBalance: 292 },
  { date: "2024-07-13", totalBalance: 342 },
  { date: "2024-07-14", totalBalance: 137 },
  { date: "2024-07-15", totalBalance: 120 },
  { date: "2024-07-16", totalBalance: 138 },
  { date: "2024-07-17", totalBalance: 446 },
  { date: "2024-07-18", totalBalance: 364 },
  { date: "2024-07-19", totalBalance: 243 },
  { date: "2024-07-20", totalBalance: 89 },
  { date: "2024-07-21", totalBalance: 137 },
  { date: "2024-07-22", totalBalance: 224 },
  { date: "2024-07-23", totalBalance: 138 },
  { date: "2024-07-24", totalBalance: 387 },
  { date: "2024-07-25", totalBalance: 215 },
  { date: "2024-07-26", totalBalance: 75 },
  { date: "2024-07-27", totalBalance: 383 },
  { date: "2024-07-28", totalBalance: 122 },
  { date: "2024-07-29", totalBalance: 315 },
  { date: "2024-07-30", totalBalance: 454 },
];

const chartConfig = {
  views: {
    label: "Total balance",
  },
  totalBalance: {
    label: "Total Balance",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function BalanceChart() {
  const [view, setView] = useState("1d");

  return (
    <div>
      <ChartContainer className="-mx-6" config={chartConfig}>
        <AreaChart accessibilityLayer data={chartData}>
          <defs>
            <linearGradient id="fillTotalBalance" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-totalBalance)"
                stopOpacity={0.6}
              />
              <stop
                offset="95%"
                stopColor="var(--color-totalBalance)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <ChartTooltip
            content={
              <ChartTooltipContent
                className="w-[150px]"
                nameKey="views"
                labelFormatter={(value) => {
                  return new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  });
                }}
              />
            }
          />
          <Area
            dataKey="totalBalance"
            type="natural"
            fill="url(#fillTotalBalance)"
            stroke="var(--color-totalBalance)"
            stackId="a"
            strokeWidth={1}
          />
        </AreaChart>
      </ChartContainer>
      <div className="flex gap-x-2">
        <button
          className={cn("relative px-2.5 py-px text-sm text-gray8 transition-colors ease-out duration-75", {
            "text-black": view === "1d",
          })}
          onClick={() => setView("1d")}
        >
          1D
          { view === "1d" && <div className="absolute -z-50 inset-0 rounded-full bg-gray3" /> }
        </button>
        <button
          className={cn("relative px-2.5 py-px text-sm text-gray8 transition-colors ease-out duration-75", {
            "text-black": view === "1w",
          })}
          onClick={() => setView("1w")}
        >
          1W
          { view === "1w" && <div className="absolute -z-50 inset-0 rounded-full bg-gray3" /> }
        </button>
        <button
          className={cn("relative px-2.5 py-px text-sm text-gray8 transition-colors ease-out duration-75", {
            "text-black": view === "1m",
          })}
          onClick={() => setView("1m")}
        >
          1M
          { view === "1m" && <div className="absolute -z-50 inset-0 rounded-full bg-gray3" /> }
        </button>
        <button
          className={cn("relative px-2.5 py-px text-sm text-gray8 transition-colors ease-out duration-75", {
            "text-black": view === "1y",
          })}
          onClick={() => setView("1y")}
        >
          1Y
          { view === "1y" && <div className="absolute -z-50 inset-0 rounded-full bg-gray3" /> }
        </button>
      </div>
    </div>
  );
}

"use client";

import { Line, LineChart } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Image from "next/image";
import { formatter } from "@/lib/helper";
import Status from "@/components/ui/status";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const currencyFormatter = formatter("USD");

export default function AssetsCardContainer() {
  return (
    <div className="-mr-6 mt-6 md:col-span-3">
      <div className="font-medium">Your Assets</div>
        <div style={{ mask: "linear-gradient(to right, white 80%, transparent)" }} className="flex mt-4 w-full overflow-x-auto space-x-4">
          <Card className="shrink-0 rounded-3xl">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center gap-x-2">
                <Image
                  src="/cryptos/tron.svg"
                  width={36}
                  height={36}
                  alt="tron"
                />
                <div>
                  <div className="font-medium">Tron</div>
                  <div className="texg-gray11 text-sm font-normal">TRX</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-0">
              <ChartContainer className="w-40" config={chartConfig}>
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 4,
                    right: 4,
                  }}
                >
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Line
                    dataKey="desktop"
                    type="natural"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex justify-between p-4">
              <div className="font-medium">
                {currencyFormatter.format(54566)}
              </div>
              <Status percent={36.5} />
            </CardFooter>
          </Card>
          <Card className="shrink-0 rounded-3xl">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center gap-x-2">
                <Image
                  src="/cryptos/tron.svg"
                  width={36}
                  height={36}
                  alt="tron"
                />
                <div>
                  <div className="font-medium">Tron</div>
                  <div className="texg-gray11 text-sm font-normal">TRX</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-0">
              <ChartContainer className="w-40" config={chartConfig}>
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 4,
                    right: 4,
                  }}
                >
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Line
                    dataKey="desktop"
                    type="natural"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex justify-between p-4">
              <div className="font-medium">
                {currencyFormatter.format(54566)}
              </div>
              <Status percent={36.5} />
            </CardFooter>
          </Card>
          <Card className="shrink-0 rounded-3xl">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center gap-x-2">
                <Image
                  src="/cryptos/tron.svg"
                  width={36}
                  height={36}
                  alt="tron"
                />
                <div>
                  <div className="font-medium">Tron</div>
                  <div className="texg-gray11 text-sm font-normal">TRX</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-0">
              <ChartContainer className="w-40" config={chartConfig}>
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 4,
                    right: 4,
                  }}
                >
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Line
                    dataKey="desktop"
                    type="natural"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex justify-between p-4">
              <div className="font-medium">
                {currencyFormatter.format(54566)}
              </div>
              <Status percent={36.5} />
            </CardFooter>
          </Card>
        </div>
    </div>
  );
}

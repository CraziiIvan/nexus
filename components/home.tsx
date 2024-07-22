"use client"

import Balance from "@/components/balance";
import { Button } from "@/components/ui/button";
import BalanceChart from "@/components/charts/balance-chart";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  History,
} from "lucide-react";
import Link from "next/link";
import AssetItem from "./cards/asset-card";

const actions = [
  {
    href: "/wallet/send",
    icon: <ArrowUpFromLine size={18} />,
    label: "Send",
  },
  {
    href: "/wallet/receive",
    icon: <ArrowDownToLine size={18} />,
    label: "Receive",
  },
  {
    href: "/wallet/history",
    icon: <History size={18} />,
    label: "History",
  },
];

export default function Home() {

  return (
    <div className=" md:p-6 md:col-span-2 md:border-2 md:border-gray-2 md:rounded-xl bg-white">
      <Balance />
      <BalanceChart/>
    </div>
  );
}

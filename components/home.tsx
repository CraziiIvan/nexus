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
    <>
    <div>
      <Balance />
      <BalanceChart/>
    </div>
    <div className="relative -mx-6 grow rounded-t-3xl border border-gray4 bg-gray2 px-6 pt-4 mt-6">
          <div className="mt-2">
            <div className="font-medium">Assets</div>
            <div className="text-sm text-gray9">Your tokens</div>
          </div>
          <div className="mt-4 space-y-4">
            <AssetItem
              src="/cryptos/bitcoin.svg"
              alt="Bitcoin"
              name="Bitcoin"
              price="$60,856.80"
              change={0.9}
              quantity="1.3"
              value="$79,113.84"
            />
            <AssetItem
              src="/cryptos/ethereum.svg"
              alt="Ethereum"
              name="Ethereum"
              price="$3,394.71"
              change={0.62}
              quantity="9.6"
              value="$32,589.22"
            />
          </div>
        </div>
    </>
  );
}

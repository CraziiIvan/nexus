"use client";

import { formatter } from "@/lib/helper";
import { Skeleton } from "./ui/skeleton";
import Status from "./ui/status";
import { useGetWallet } from "@/lib/hooks/useGetWallet";

export default function Balance() {
  const { data, isLoading } = useGetWallet();

  if (data) console.log(data);

  return (
    <div>
      <div className="flex items-center gap-x-4">
        <div className="text-sm text-gray8">Total Balance</div>
      </div>
      <div className="mb-2 flex text-4xl font-bold">
        {isLoading ? (
          <div className="space-y-0.5">
            <Skeleton className="h-6 w-56 rounded" />
            <Skeleton className="h-2.5 w-56 rounded" />
          </div>
        ) : (
          formatter.format(data.balance)
        )}
      </div>
      <Status percent={16.42} />
    </div>
  );
}

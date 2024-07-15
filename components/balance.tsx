"use client"

import { getWallet } from "@/lib/actions";
import { formatter } from "@/lib/helper";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Status from "./ui/status";
import { Copy } from "iconoir-react";

export default async function Balance() {
  const [balance, setBalance] = useState<string | null>("$0.00");
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const response = await getWallet();
      setBalance(formatter.format(response.balance));
      setAddress(response.address);
    }
    fetchData();
  }, []);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(address);
      toast.success("Copy to clipboard");
    } catch (err) {
      toast.error("Failed to copy");
    }
  }

  return (
    <div className=" flex flex-col py-2 space-y-4">
      <div className="flex gap-x-4 items-center">
        <div className="text-neutral-400">Balance</div>
        <button
          onClick={copyToClipboard}
          className=" flex items-center py-1 px-2 gap-x-1  bg-neutral-950 border border-neutral-900 rounded-full group"
        >
          <Copy
            fontSize={10}
            className="text-neutral-500 duration-150 group-active:text-white group-active:scale-95"
          />
          <div
            className="max-w-16 text-xs"
            style={{ mask: "linear-gradient(90deg, white 50%, transparent)" }}
          >
            {address}
          </div>
        </button>
      </div>
      <div className="text-4xl font-semibold " >
      {balance}
      </div>
      <Status percent={16.42} />
    </div>
  );
}

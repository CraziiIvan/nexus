"use client";

import { getWallet } from "@/lib/actions";
import { formatter, generateRandomString } from "@/lib/helper";
import { ArrowUpRight, Copy, Eye, EyeClosed } from "iconoir-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Status from "./ui/status";

export default function Balance() {
  const [balance, setBalance] = useState<string | null>(null);
  const [address, setAddress] = useState<string>("");
  const [showBalace, setShowBalance] = useState(true);

  function showBalaceToggle() {
    setShowBalance(!showBalace);
  }

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
    <div className=" flex flex-col py-4 space-y-2">
      <div className="flex gap-x-4 items-center">
        <div className="text-neutral-400">Balance</div>
        <button
          onClick={copyToClipboard}
          className=" flex items-center py-1 px-2 bg-black/25 border border-neutral-800 rounded-full group"
        >
          <div
            className="max-w-20 text-xs"
            style={{ mask: "linear-gradient(90deg, white 5%, transparent)" }}
          >
            {address}
          </div>
          <Copy
            fontSize={12}
            className="text-neutral-500 duration-150 group-active:text-white group-active:scale-75"
          />
        </button>
      </div>
      <div className="text-4xl font-semibold flex max-h-14 overflow-hidden" style={{mask: "linear-gradient(transparent, white 30%, white 70%, transparent)"}}>
        <div>
        <motion.div animate={{ translateY: showBalace ? "0" : "-100%" }} className="leading-[56px]">
          {balance}
        </motion.div>
        <motion.div animate={{ translateY: showBalace ? "0" : "-100%" }} className="leading-[56px]">
          ${generateRandomString(balance ? balance?.length - 2 : 0)}
        </motion.div>
        </div>
        <button
          onClick={showBalaceToggle}
          className=" ml-4 text-neutral-700 active:scale-95 ease-out"
        >
          {showBalace ? <Eye fontSize={16} /> : <EyeClosed fontSize={16} />}
        </button>
      </div>
      <Status percent={16.42} />
    </div>
  );
}

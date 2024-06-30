"use client";

import { getBalance } from "@/lib/actions";
import { formatter } from "@/lib/helper";
import { ArrowUpRight, Eye, EyeClosed } from "iconoir-react";
import { useEffect, useState } from "react";


export default function Balance() {

  const [balance, setBalance] = useState("");
  const [showBalace, setShowBalance] = useState(true);

  useEffect(() => {
    async function fetchBalance() {
      const data = await getBalance()
      setBalance(formatter.format(data))
    }

    fetchBalance()
  }, [])

  function showBalaceToggle() {
    setShowBalance(!showBalace)
  }

  return (
    <div className=" flex flex-col items-center space-y-6 py-12">
      <div className="text-neutral-500">Balance</div>
      <div className=" relative text-4xl font-semibold">
        {balance}
        <button
          onClick={showBalaceToggle}
          className=" absolute -right-10 top-2 text-neutral-700 active:scale-95 ease-out"
        >
          {showBalace ? <Eye fontSize={16} /> : <EyeClosed fontSize={16} />}
        </button>
      </div>
      <div className=" flex items-center text-sm gap-x-2 text-green-500">
        <ArrowUpRight fontSize={10} />
        16.42%
      </div>
    </div>
  );
}

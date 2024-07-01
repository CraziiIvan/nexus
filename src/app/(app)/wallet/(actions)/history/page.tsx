"use client"

import AssetItem from "@/components/assetItem";
import ProtectRoute from "@/components/protectRoute";
import api from "@/lib/api";
import { extractDate, formatter, shorternId } from "@/lib/helper";
import { TTransaction } from "@/lib/types";
import { NavArrowLeft } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function History() {

  const [ history, setHistory ] = useState<[] | TTransaction[]>([])

  useEffect(() => {
    async function getHistory() {
      try {
        const response = await api.get("/trc-20/transaction/history/")
        setHistory(response.data)
      } catch(error) {
        console.error(error);
      }
    }
    getHistory()
  }, [])

  return (
    <ProtectRoute>
          <header className="grid grid-cols-3 items-center">
    <Link className="text-neutral-500" href={"./"}>
      <NavArrowLeft fontSize={14} />
    </Link>
    <div className="text-center">History</div>
  </header>
    <main className="mt-6 grid gap-y-4">
    {
      history.map(transaction => (
        <div className="flex items-center justify-between w-full">
        <div className="flex gap-x-4">
          <Image src={"/networks/tron.svg"} alt={"Tron"} width={38} height={38} />
          <div>
            <div>Send</div>
            <div className="text-sm text-neutral-400">
              To {shorternId(transaction.recipient)}
            </div>
          </div>
        </div>
        <div>
          <div className="font-medium text-end">{formatter.format(transaction.amount)}</div>
          <div className="text-sm text-neutral-400 text-end">{extractDate(transaction.timestamp)}</div>
        </div>
      </div>
      ))
    }
    </main>
    </ProtectRoute>
  )
}

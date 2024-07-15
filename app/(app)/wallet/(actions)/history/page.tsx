"use client";

import ProtectRoute from "@/components/protectRoute";
import api from "@/lib/api";
import { formatter, shorternId } from "@/lib/helper";
import { TTransaction } from "@/lib/types";
import { NavArrowLeft, Upload } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState<[] | TTransaction[]>([]);

  useEffect(() => {
    async function getHistory() {
      try {
        const response = await api.get("/trc-20/transaction/history/");
        setHistory(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getHistory();
  }, []);

  return (
    <ProtectRoute>
      <header className="grid grid-cols-3 items-center">
        <Link className="text-neutral-500" href={"./"}>
          <NavArrowLeft fontSize={14} />
        </Link>
        <div className="text-center">History</div>
      </header>
      <main className="mt-6 grid gap-y-4">
        {history.map((transaction) => (
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-x-4">
              <Image
                src={"/networks/tron.svg"}
                alt={"Tron"}
                width={36}
                height={36}
              />
              <div>
                <div className="font-medium">Send Tron</div>
                <div className="text-sm text-neutral-400">
                  To {shorternId(transaction.recipient)}
                </div>
              </div>
            </div>
            <div>
              <div className="text-end text-neutral-400">
                - {formatter.format(transaction.amount)}
              </div>
              <div className="text-end text-sm text-neutral-400">{}</div>
            </div>
          </div>
        ))}
      </main>
    </ProtectRoute>
  );
}

"use client";

import SendForm from "@/components/forms/sendForm";
import ProtectRoute from "@/components/protectRoute";
import api from "@/lib/api";
import { TTransaction } from "@/lib/types";
import { NavArrowLeft, Scanning, User } from "iconoir-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Send() {
  const [history, setHistory] = useState<[] | TTransaction[]>([]);

  useEffect(() => {
    async function getHistory() {
      try {
        const response = await api.get("/trc-20/transaction/history/");
        console.log(response.data);
        setHistory(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getHistory();
  }, []);

  return (
    <ProtectRoute>
      <header className=" flex justify-between items-center">
        <Link className="text-neutral-500" href={"./"}>
          <NavArrowLeft fontSize={14} />
        </Link>
        <div>Send</div>
        <Scanning fontSize={14} className="text-neutral-500" />
      </header>
      <main className=" pt-8 space-y-6">
        <SendForm />
        <div className="w-full relative pt-4 before:absolute before:w-full before:h-px before:top-0 before:bg-gradient-to-r before:from-black before:via-neutral-700 before:to-black">
          <div>Recent</div>
          <div className="mt-6 grid gap-y-4">
            {history.map((transaction) => (
              <div className="flex items-center gap-x-4">
                <div className="w-10 h-10 rounded-full bg-neutral-800  flex items-center justify-center text-neutral-400">
                  <User fontSize={13} />
                </div>
                <div>
                  <div className=" font-medium">User</div>
                  <div className="text-sm text-neutral-400 text-ellipsis overflow-hidden">
                    {transaction.recipient}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </ProtectRoute>
  );
}

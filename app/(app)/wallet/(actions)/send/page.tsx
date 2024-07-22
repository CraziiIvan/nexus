"use client";

import SendForm from "@/components/forms/send-form";
import api from "@/lib/api";
import { TTransaction } from "@/lib/types";
import { ChevronLeft, ScanLine, User } from "lucide-react";
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
    <>
      <header className=" flex justify-between items-center">
        <Link className="text-gray9" href={"./"}>
          <ChevronLeft fontSize={14} />
        </Link>
        <div>Send</div>
        <ScanLine size={20} className="text-gray9" />
      </header>
      <main className=" pt-8">
        <SendForm />
      </main>
        <div className="-mx-6 mt-8 grow rounded-t-3xl border border-gray4 bg-gray2 px-6 pt-4">
        <div className="mt-2">
          <div className="font-medium">Recent</div>
        </div>
        <div className="mt-4 grid gap-y-4 grow">
            {history.map((transaction) => (
              <div className="flex items-center gap-x-4">
                <div className="w-10 h-10 rounded-full bg-white  flex items-center justify-center text-gray9 border border-gray4">
                  <User size={20} />
                </div>
                <div>
                  <div className=" font-medium">User</div>
                  <div className="text-sm text-gray11 text-ellipsis overflow-hidden">
                    {transaction.recipient}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
}

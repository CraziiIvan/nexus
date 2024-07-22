"use client";

import { formatter, shorternId } from "@/lib/helper";
import { useGetHistory } from "@/lib/hooks/use-get-history";
import { ChevronLeft, LoaderCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function History() {
  const { data, isLoading } = useGetHistory();

  const currencyFormatter = formatter("usd");

  return (
    <>
      <header className="grid grid-cols-3 items-center">
        <Link href={"./"}>
          <ChevronLeft fontSize={14} />
        </Link>
        <div className="text-center">History</div>
      </header>
      <main className="mt-6 flex flex-col gap-y-4 grow">
        {isLoading ? (
          <div className="grow flex items-center justify-center pb-12">
            <LoaderCircle className="animate-spin"/>
          </div>
        ) : (
          data &&
          data.map((transaction) => (
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
                  <div className="text-sm text-gray9">
                    To {shorternId(transaction.recipient)}
                  </div>
                </div>
              </div>
              <div>
                <div className="text-end text-gray9">
                  - {currencyFormatter.format(transaction.amount)}
                </div>
                <div className="text-end text-sm text-gray9">{}</div>
              </div>
            </div>
          ))
        )}
      </main>
    </>
  );
}

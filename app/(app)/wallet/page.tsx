import Balance from "@/components/balance";
import AddressCard from "@/components/cards/address-card";
import AssetCard from "@/components/cards/asset-card";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, ArrowUpFromLine, Clock, Plus, ScanLine } from "lucide-react";
import Link from "next/link";

export default function WalletPage() {

  const actions = [
    {
      name: "Add",
      icon: Plus,
      href: "wallet/add"
    },
    {
      name: "Send",
      icon: ArrowUpFromLine,
      href: "wallet/send"
    },
    {
      name: "Receive",
      icon: ArrowDownToLine,
      href: "wallet/receive"
    },
    {
      name: "History",
      icon: Clock,
      href: "wallet/history"
    }
  ]

  return (
    <>
      <header className="flex justify-between items-center">
        <AddressCard/>
        <ScanLine size={20} className="text-gray9" />
      </header>
      <main className="pt-8 space-y-8 flex flex-col grow">
      <Balance className="flex flex-col items-center" />
      <div className="mt-8 grid grid-cols-4">
        {actions.map((action, index) => (
          <Link href={action.href} key={index} className="flex flex-col items-center justify-center">
            <Button variant={"outline"} size="round">
              <action.icon size={16} />
            </Button>
            <div className="mt-1 text-sm text-gray9">{action.name}</div>
          </Link>
        ))}
      </div>
      <div className="-mx-6 mt-8 grow rounded-t-3xl border border-gray4 bg-gray2 px-6 pt-4">
        <div className="mt-2">
          <div className="font-medium">Assets</div>
          <div className="text-sm text-gray9">Your tokens</div>
        </div>
        <div className="mt-4 space-y-4">
          <AssetCard
            src="/cryptos/bitcoin.svg"
            alt="Bitcoin"
            name="Bitcoin"
            price="$60,856.80"
            change={0.9}
            quantity="1.3"
            value="$79,113.84"
          />
          <AssetCard
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
      </main>
    </>
  );
}

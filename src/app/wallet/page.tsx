import AssetItem from "@/components/assetItem";
import Balance from "@/components/balance";
import Nav from "@/components/nav";
import ProtectRoute from "@/components/protectRoute";
import TransButton from "@/components/ui/transButton";

import {
  CoinsSwap,
  Download,
  NavArrowDown,
  Plus,
  Scanning,
  ScanQrCode,
  Upload,
} from "iconoir-react";
import Image from "next/image";

export default function Home() {
  return (
    <ProtectRoute>
      <header className="flex justify-between ">
        <div>
          <Image src={"/nexus.svg"} alt="Nexus" width={20} height={20} />
        </div>
        <button className="flex items-center gap-x-1.5 p-1 pr-1.5 bg-black/25 rounded-full">
          <Image
            src="/networks/tron.svg"
            alt="Tron Network"
            width={18}
            height={18}
          />
          <div className="text-xs text-white text-nowrap">Tron RTX</div>
          <NavArrowDown fontSize={10} />
        </button>
        <Scanning fontSize={14} className="text-neutral-500" />
      </header>
      <main className="flex flex-col w-full">
        <Balance />
        <div className="flex justify-evenly w-full">
          <div className="flex flex-col items-center text-neutral-700 text-xs gap-y-2">
            <TransButton href="/wallet/add">
              <Plus fontSize={14} />
            </TransButton>
            <div>Add</div>
          </div>
          <div className="flex flex-col items-center text-neutral-700 text-xs gap-y-2">
            <TransButton href="/wallet/send">
              <Upload fontSize={14} />
            </TransButton>
            <div>Send</div>
          </div>
          <div className="flex flex-col items-center text-neutral-700 text-xs gap-y-2">
            <TransButton href="/wallet/receive">
              <Download fontSize={14} />
            </TransButton>
            <div>Receive</div>
          </div>
          <div className="flex flex-col items-center text-neutral-700 text-xs gap-y-2">
            <TransButton href="/wallet/swap">
              <CoinsSwap fontSize={14} />
            </TransButton>
            <div>Swap</div>
          </div>
        </div>
        <div className="w-full relative pt-4 before:absolute before:w-full before:h-px before:top-0 before:bg-gradient-to-r before:from-black before:via-neutral-700 before:to-black  mt-8">
          <div className=" flex gap-x-8">
            <div className="text-white">Assets</div>
            <div className="text-neutral-700">Nfts</div>
          </div>
          <div className="mt-6 grid gap-y-4">
            <AssetItem
              src="/tokens/bitcoin.svg"
              alt="Bitcoin"
              name="Bitcoin"
              price="$60,856.80"
              change="0.90%"
              quantity="1.3"
              value="$79,113.84"
            />
            <AssetItem
              src="/tokens/ethereum.svg"
              alt="Ethereum"
              name="Ethereum"
              price="$3,394.71"
              change="0.62%"
              quantity="9.6"
              value="$32,589.22"
            />
          </div>
        </div>
        <Nav />
      </main>
    </ProtectRoute>
  );
}

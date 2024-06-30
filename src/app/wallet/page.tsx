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
  ScanQrCode,
  Upload,
} from "iconoir-react";
import Image from "next/image";

export default function Home() {
  return (
    <ProtectRoute>
      <header className="flex justify-between h-10 items-center">
        <button className="flex items-center text-neutral-500 gap-x-2">
          <Image
            src="/networks/tron.svg"
            alt="Tron Network"
            width={24}
            height={24}
          />
          <div className="text-sm text-white">Tron RTX</div>
          <NavArrowDown fontSize={12} />
        </button>
        <button className="text-neutral-500">
          <ScanQrCode />
        </button>
      </header>
      <main className="flex flex-col w-full">
        <Balance />
        <div className="flex justify-evenly w-full">
          <div className="flex flex-col items-center text-neutral-700 text-xs gap-y-2">
            <TransButton>
              <Plus fontSize={14}/>
            </TransButton>
            <div>Add</div>
          </div>
          <div className="flex flex-col items-center text-neutral-700 text-xs gap-y-2">
            <TransButton>
              <Upload fontSize={14}/>
            </TransButton>
            <div>Send</div>
          </div>
          <div className="flex flex-col items-center text-neutral-700 text-xs gap-y-2">
            <TransButton>
              <Download fontSize={14}/>
            </TransButton>
            <div>Receive</div>
          </div>
          <div className="flex flex-col items-center text-neutral-700 text-xs gap-y-2">
            <TransButton>
              <CoinsSwap fontSize={14}/>
            </TransButton>
            <div>Swap</div>
          </div>
        </div>
        <div className="w-full pt-4 border-t border-t-neutral-900 mt-8">
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

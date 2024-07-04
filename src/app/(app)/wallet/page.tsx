import AssetItem from "@/components/assetItem";
import Hero from "@/components/layouts/hero";
import Nav from "@/components/layouts/nav";
import ProtectRoute from "@/components/protectRoute";

import { NavArrowDown, Scanning } from "iconoir-react";
import Image from "next/image";

export default function Home() {
  return (
    <ProtectRoute>
      <header className="flex justify-between sticky top-6 ">
        <div>
          <Image src={"/nexus.svg"} alt="Nexus" width={20} height={20} />
        </div>
        <button className="flex items-center gap-x-1 p-1 bg-white/10 rounded-full">
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
      <main className="flex flex-col w-full mt-8">
        <Hero/>
        <div className="w-full relative pt-4 mt-4 border-t border-neutral-900">
          <div className=" flex gap-x-8">
            <div className="text-white">Assets</div>
            <div className="text-neutral-700">Nfts</div>
          </div>
          <div className="mt-8 grid gap-y-6">
            <AssetItem
              src="/cryptos/bitcoin.svg"
              alt="Bitcoin"
              name="Bitcoin"
              price="$60,856.80"
              change={0.9}
              quantity="1.3"
              value="$79,113.84"
            />
            <AssetItem
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
        <Nav />
      </main>
    </ProtectRoute>
  );
}

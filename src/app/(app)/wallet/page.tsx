import AssetItem from "@/components/assetItem";
import Balance from "@/components/balance";
import Nav from "@/components/layouts/nav";
import ProtectRoute from "@/components/protectRoute";
import TransButton from "@/components/ui/transButton";

import {
  Clock,
  CoinsSwap,
  Download,
  NavArrowDown,
  Plus,
  Scanning,
  Upload,
} from "iconoir-react";
import Image from "next/image";

const actions = [
  {
    href: "/wallet/add",
    icon: <Plus fontSize={14} />,
    label: "Add",
  },
  {
    href: "/wallet/send",
    icon: <Upload fontSize={14} />,
    label: "Send",
  },
  {
    href: "/wallet/receive",
    icon: <Download fontSize={14} />,
    label: "Receive",
  },
  {
    href: "/wallet/swap",
    icon: <CoinsSwap fontSize={14} />,
    label: "Swap",
  },
  {
    href: "/wallet/history",
    icon: <Clock fontSize={14} />,
    label: "History",
  },
];

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
      <main className="flex flex-col w-full gap-y-8 mt-8">
        <Balance />
        <div className="flex justify-between w-full">
          {actions.map((action, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-neutral-500 text-xs gap-y-2"
            >
              <TransButton href={action.href}>{action.icon}</TransButton>
              <div>{action.label}</div>
            </div>
          ))}
        </div>
        <div className="w-full relative pt-4 before:absolute before:w-full before:h-px before:top-0 before:bg-gradient-to-r before:from-black before:via-neutral-700 before:to-black">
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
              change={0.90}
              quantity="1.3"
              value="$79,113.84"
            />
            <AssetItem
              src="/tokens/ethereum.svg"
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

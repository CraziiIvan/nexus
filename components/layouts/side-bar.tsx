"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import wallet from "@/public/icons/wallet.svg";
import explore from "@/public/icons/explore.svg";
import setting from "@/public/icons/setting.svg";
import home from "@/public/icons/home.svg";
import { cn } from "@/lib/utils";

const navList = [
  { name: "Home", icon: home, href: "/home" },
  { name: "Wallet", icon: wallet, href: "/wallet" },
  { name: "Market", icon: explore, href: "/market" },
  { name: "Setting", icon: setting, href: "/setting" },
];

export default function SideBar() {
  const pathname = usePathname();

  return (
<aside className="row-span-3 w-full p-4 border-r border-r-gray4 bg-white">
        <div className="rounded-lg ml-3 bg-gradient-to-br from-gray12 to-black p-1 w-8">
          <Image src={"/nexus.svg"} alt="Nexus" width={24} height={24} />
        </div>
    <nav className=" mt-4">
    {navList.map((nav, index) => {
        const isActive = pathname.startsWith(nav.href);
        return (
          <Link key={index} href={nav.href}>
            <div className="group relative flex items-center gap-x-3 px-3 py-2">
              <div
                className={cn(
                  "relative z-50 opacity-30 transition-opacity duration-300 ease-out group-hover:opacity-100",
                  { "opacity-100": isActive },
                )}
              >
                <Image src={nav.icon} alt="nav icon" width={20} height={20} />
              </div>
              <div
                className={cn(
                  "relative z-50 text-gray9 duration-300 ease-out group-hover:text-black font-medium",
                  { "text-black": isActive },
                )}
              >
                {nav.name}
              </div>
              {isActive && (
                <motion.div
                  layoutId="navBackDrop"
                  className="absolute inset-0 z-40 rounded-md bg-gray2 "
                />
              )}
            </div>
          </Link>
        );
      })}
    </nav>
    </aside>
  );
}

"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import wallet from "@/public/icons/wallet.svg";
import market from "@/public/icons/market.svg";
import setting from "@/public/icons/setting.svg";
import home from "@/public/icons/home.svg";
import { cn } from "@/lib/utils";
import { useScroll } from "@/lib/hooks/use-scroll";

const navList = [
  { name: "Home", icon: home, href: "/home" },
  { name: "Wallet", icon: wallet, href: "/wallet" },
  { name: "Market", icon: market, href: "/market" },
  { name: "Setting", icon: setting, href: "/setting" },
];

export default function Nav() {
  const pathname = usePathname();

  const isScrolling = useScroll(1000);

  if (pathname === "/" || pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <motion.nav
      animate={{ bottom: isScrolling ? -64 : 32 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      className="fixed bottom-8 left-1/2 z-40 flex -translate-x-1/2 gap-x-1 rounded-full border border-gray5 bg-gray4/50 p-1 backdrop-blur-sm md:hidden"
    >
      {navList.map((nav, index) => {
        const isActive = pathname.startsWith(nav.href);
        return (
          <Link key={index} href={nav.href}>
            <div className="relative flex aspect-square h-[52px] w-[52px] items-center justify-center rounded-full">
              <div
                className={cn(
                  "relative z-50 opacity-30 transition-opacity duration-300 ease-out",
                  { "opacity-100": isActive },
                )}
              >
                <Image src={nav.icon} alt="nav icon" width={20} height={20} />
              </div>
              {isActive && (
                <motion.div
                  layoutId="navBackDrop"
                  className="absolute inset-0 z-40 rounded-full bg-white shadow"
                />
              )}
            </div>
          </Link>
        );
      })}
    </motion.nav>
  );
}

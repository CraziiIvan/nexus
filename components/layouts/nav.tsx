"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import wallet from "@/public/icons/wallet.svg"
import explore from "@/public/icons/explore.svg"
import setting from "@/public/icons/setting.svg"
import home from "@/public/icons/home.svg"
import { cn } from "@/lib/utils";
import { useScroll } from "@/lib/hooks/use-scroll";

const navList = [
  { name: "Home", icon:  home, href: "/home" },
  { name: "Wallet", icon:  wallet, href: "/wallet" },
  { name: "Market", icon: explore, href: "/market" },
  { name: "Setting", icon: setting, href: "/setting" },
];

export default function Nav() {

  const pathname = usePathname()

  const isScrolling = useScroll(1000)

  if ( pathname === "/" || pathname ==="/login" || pathname ==="/register") {
    return null
  }

  return (
      <motion.nav animate={{ bottom: isScrolling ? -64 : 32 }} transition={{ease: "easeOut", duration: 0.3 }} className="fixed z-40 bottom-8 left-1/2 -translate-x-1/2 bg-gray4/50 flex p-1 gap-x-1 rounded-full border border-gray5 backdrop-blur-sm">
        {navList.map((nav, index) => {
          const isActive = pathname.startsWith(nav.href);
          return (
              <Link key={index} href={nav.href} >
                <div className=" relative w-[52px] h-[52px] rounded-full aspect-square flex justify-center items-center">
                <div className={cn("relative z-50 opacity-30 transition-opacity ease-out duration-300", { "opacity-100": isActive })}>
                  <Image src={nav.icon} alt="nav icon" width={24} height={24} />
                </div>
                { isActive && <motion.div layoutId="navBackDrop" className="absolute shadow inset-0 rounded-full bg-white z-40" />    }
                </div>
              </Link>
          );
        })}
      </motion.nav>
  );
}

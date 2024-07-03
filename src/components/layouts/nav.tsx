"use client";

import { Wallet, GraphUp, User, Settings } from "iconoir-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navList = [
  { name: "Wallet", icon: <Wallet width={20} />, href: "/wallet" },
  { name: "Market", icon: <GraphUp width={20} />, href: "/market" },
  { name: "Setting", icon: <Settings width={20} />, href: "/setting" },
];

export default function Nav() {

  const pathname = usePathname()

  if ( pathname === "/" || pathname ==="/login" || pathname ==="/register") {
    return null
  }

  return (
      <nav className="text-neutral-500 fixed z-40 bottom-6 left-1/2 -translate-x-1/2 flex gap-x-6 px-6 py-4 rounded-full bg-neutral-950 drop-shadow-lg border-[1.5px] border-neutral-900">
        {navList.map((nav, index) => {
          const isActive = pathname.startsWith(nav.href);
          return (
            <motion.div
              key={index}
              initial={{ maxWidth: 24 }}
              animate={{ maxWidth: isActive ? 200 : 24 }}
              transition={{
                type: "spring",
                mass: 1,
                damping: 30,
                stiffness: 200,
              }}
              className={cn("cursor-pointer relative hover:text-white flex transition-colors duration-300", {
                "text-white": isActive,
              })}
            >
              <Link href={nav.href}>
              <div className="flex justify-start items-center gap-x-2">
                {nav.icon}
                <motion.span
                  animate={{ opacity: isActive ? 100 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {nav.name}
                </motion.span>
              </div>
              {isActive && (
                <motion.div
                transition={{
                  type: "spring",
                  mass: 1,
                  damping: 30,
                  stiffness: 600,
                }}
                layoutId="spotLight"
                className=" absolute top-[-17px] z-50 inset-x-2 h-[0.5px] bg-gradient-to-r from-neutral-800  via-white to-neutral-800"
                />
              )}
              </Link>
            </motion.div>
          );
        })}
      </nav>
  );
}

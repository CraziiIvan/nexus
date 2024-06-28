"use client";

import { Wallet, Clock, User, Settings } from "iconoir-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navList = [
  { name: "Wallet", icon: <Wallet width={20} /> },
  { name: "History", icon: <Clock width={20} /> },
  { name: "User", icon: <User width={20} /> },
  { name: "Setting", icon: <Settings width={20} /> },
];

export default function Nav() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <nav className="fixed z-40 bottom-6 left-1/2 -translate-x-1/2 p-px bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-full">
      <ul className="text-neutral-500 flex gap-x-6 px-6 py-4 rounded-full bg-neutral-950">
        {navList.map((nav, index) => {
          const isActive = activeIndex === index;
          return (
            <motion.li
              onClick={() => setActiveIndex(index)}
              key={index}
              initial={{ maxWidth: 24 }}
              animate={{ maxWidth: isActive ? 200 : 24 }}
              transition={{
                type: "spring",
                mass: 1,
                damping: 30,
                stiffness: 180,
              }}
              className={cn("cursor-pointer relative hover:text-white flex transition-colors duration-300", {
                "text-white": isActive,
              })}
            >
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
                    stiffness: 180,
                  }}
                  layoutId="spotLight"
                  className=" absolute top-[-17px] left-0 z-50 w-full h-[0.5px] bg-gradient-to-r from-neutral-800 via-white to-neutral-800"
                />
              )}
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}

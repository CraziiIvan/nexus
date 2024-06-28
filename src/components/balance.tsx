"use client";

import { ArrowUpRight, Eye, EyeClosed } from "iconoir-react";
import { useEffect, useState } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { generateRandomString } from "@/lib/helper";

export default function Balance() {

  const [ scope, animate ] = useAnimate()

  const [ realBalace, setRealBalance] = useState("5,684.26")
  const [balance, setBalance] = useState(realBalace);
  const [showBalace, setShowBalance] = useState(false);

  function showBalaceToggle() {
    if (showBalace) {
      animate(".digit", {opacity: [0, 1]}, {delay: stagger(0.05, {from: Math.floor(Math.random() * realBalace.length)})})
      setBalance(generateRandomString(realBalace.length))
    } else {
      setBalance(realBalace)
      animate(".digit", {opacity: [0, 1]}, {delay: stagger(0.05, {from: Math.floor(Math.random() * realBalace.length)})})
    }
    setShowBalance(!showBalace)
  }

  return (
    <div className=" flex flex-col items-center space-y-2">
      <div className="text-neutral-500">Balance</div>
      <div ref={scope} className=" relative text-4xl font-semibold">
          $
        {balance.split("").map((digit) => (
          <span
            className="digit"
          >
            {digit}
          </span>
        ))}
        <button
          onClick={showBalaceToggle}
          className=" absolute -right-10 top-2 text-neutral-700 active:scale-95 ease-out"
        >
          {showBalace ? <Eye fontSize={16} /> : <EyeClosed fontSize={16} />}
        </button>
      </div>
      <div className=" flex items-center text-sm gap-x-2 text-green-500">
        <ArrowUpRight fontSize={10} />
        16.42%
      </div>
    </div>
  );
}

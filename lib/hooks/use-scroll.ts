"use client";

import { useEffect, useState } from "react";
import { throttle } from "es-toolkit";

export function useScroll(throttleMs = 200) {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {

    let scrollTimeout: NodeJS.Timeout;

    const delayFunction =  throttle(() => {
      setIsScrolling(true);
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, throttleMs);
    }, throttleMs);

    const handleScroll = () => {

      // if (window.scrollTop === 0) {
      //   setIsScrolling(false)
      //   return;
      // }
      
      delayFunction();
    }


    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [throttleMs]);

  return isScrolling;
}

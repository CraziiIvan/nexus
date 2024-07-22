"use client";

import { useGetWallet } from "@/lib/hooks/useGetWallet";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, Copy } from "lucide-react";
import { shorternId } from "@/lib/helper";
import { useToast } from "../ui/use-toast";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AddressCard() {
  const { data, isLoading } = useGetWallet();
  const [address, setAddress] = useState<string>("");
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setAddress(data?.address);
  }, [data]);

  async function copyToClipboard(text: string) {
    
    try {
      await navigator.clipboard.writeText(text);
      setSuccess(true);
      toast({description: "Copied to clipboard"})
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (err) {
      console.error(err);
      toast({description: "Failed to copy to clipboard", variant: "destructive"});
    }
  }

  return (
    <button
      onClick={() => copyToClipboard(address)}
      className="group flex w-fit items-center gap-2 overflow-hidden rounded-full border border-gray4 bg-gray2 px-2 py-1 text-sm"
    >
      {isLoading ? (
        <Skeleton className="h-5 w-24 rounded-full" />
      ) : (
        <div>{shorternId(data?.address)}</div>
      )}
      <div className="w-[13px] h-[13px] relative">
            <motion.div
              animate={{ scale: success ? 1 : 0.5, opacity: success ? 1 : 0 }}
              className="rounded-full bg-green8 absolute -inset-0.5 z-50 text-white group-active:scale-50 flex items-center justify-center"
            >
              <Check size={12} strokeWidth={2.5} />
            </motion.div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: success ? 0.5 : 1, opacity: success ? 0 : 1 }}
            >
              <Copy size={13} />
            </motion.div>
      </div>
    </button>
  );
}

"use client"

import { useGetWallet } from "@/lib/hooks/useGetWallet"
import Image from "next/image"

export default function UserCard() {

    const { data, isLoading, error } = useGetWallet()

  return ( 
    <div className="flex items-center gap-x-2">
    <div className="h-9 w-9 rounded-full border border-gray4 bg-gray2 flex items-center justify-center">
      <Image src={"/icons/user.svg"} alt="user" width={20} height={20} />
    </div>
    <div>
      <div className="font-medium leading-5">{data?.user}</div>
      <div className="text-gray8 text-sm leading-4">@{data?.user}</div>
    </div>
  </div>
  )}
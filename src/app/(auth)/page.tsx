"use client"

import Button from "@/components/ui/button";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../loading";

export default function Home() {

  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      redirect("/wallet");
    }
    setIsLoading(false)
  }, [])

  if(isLoading) {
    return null
  }
  
  return (
    <main className="py-12 flex flex-col justify-between h-full">
      <div>
        <h1 className="text-4xl font-semibold text-neutral-50">
        A safe and intuitive platform for all your cryptos needs.
        </h1>
        <p className=" mt-4 text-neutral-500">
          Nexus is a decentralized wallet that allows you to manage your
          cryptocurrencies with ease.
        </p>
      </div>
      <div className=" space-y-4">
        <Button href="/register" variant="primary">Create Account</Button>
        <Button href="/login" variant="secondary">Login Account</Button>
      </div>
    </main>
  );
}

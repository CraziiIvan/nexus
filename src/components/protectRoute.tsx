"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [ isLoading, setIsLoading ] = useState(true)
  
  useEffect(() => {
    const token = localStorage.getItem("accessToken")

    if (!token) {
      router.push("/login");
    }

    setIsLoading(false)
  }, []);

  if (isLoading) {
    return null
  }

  return <>{children}</>;
}

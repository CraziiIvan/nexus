import type { Metadata } from "next";
import {inter} from "../lib/fonts";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ReactQueryProvider from "@/components/providers/react-query-provider";

export const metadata: Metadata = {
  title: "Crypto Wallet",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen w-screen overflow-auto p-6 md:p-0 grid grid-rows-[auto,auto,1fr] grid-cols-1 md:gap-6 md:grid-cols-[240px,1fr]`}
      >
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}

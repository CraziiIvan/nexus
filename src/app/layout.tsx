import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProtectRoute from "@/components/protectRoute";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black p-6 text-white`}>
        <div className=" fixed bg-blue-900 w-32 h-20 roundded-full blur-[100px] -top-10 left-1/2 -translate-x-1/2 -z-10" />
        <div className=" bg-blue-950 w-96 h-80 rounded-full fixed -z-20 blur-[200px] -top-52 left-1/2 -translate-x-1/2" />
        {children}
      </body>
    </html>
  );
}

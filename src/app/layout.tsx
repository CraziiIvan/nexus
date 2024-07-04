import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner"

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
      <body className={`${inter.className} bg-black p-6 text-white h-svh w-svw`}>
        {/* <div className="fixed z-30 bottom-0 w-full h-24 bg-gradient-to-b from-black/0 to-black" /> */}
        {children}
        <Toaster position="top-center" richColors/>
      </body>
    </html>
  );
}

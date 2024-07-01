import { raleway } from "@/lib/fonts";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className=" flex items-center gap-x-2">
        <Image src={"/nexus.svg"} alt="Nexus" width={24} height={24}/>
        <h1 className={`${raleway.className} font-bold text-2xl`}>Nexus</h1>
      </header>
      {children}
    </>
  );
}

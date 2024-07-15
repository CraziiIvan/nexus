import { Button } from "@/components/ui/button";
import { raleWay } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-start gap-x-2">
        <div className="rounded-lg bg-gradient-to-br from-gray12 to-black p-1">
          <Image src={"/nexus.svg"} alt="Nexus" width={24} height={24} />
        </div>
        <div className={`${raleWay.className} text-[26px] font-bold leading-6`}>
          Nexus
        </div>
      </header>
      <main className="-mx-2 mt-6 grow rounded-2xl bg-gray4"></main>
      <footer className="mt-6 space-y-8">
        <div>
          <h2 className="text-lg text-gray10">Step into future of finance.</h2>
          <h1 className="text-3xl font-bold">
            Revolutionize <br /> Your Digital Finance
          </h1>
        </div>
        <div className=" flex flex-col space-y-2">
          <Link href="/register">
            <Button className="h-12 w-full">Get Started</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" className="h-12 w-full">
              Login Account
            </Button>
          </Link>
        </div>
      </footer>
    </>
  );
}

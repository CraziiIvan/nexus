import Balance from "@/components/balance";
import Nav from "@/components/nav";
import TransButton from "@/components/ui/transButton";
import { Download, NavArrowDown, Plus, ScanQrCode, Upload } from "iconoir-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className=" grid grid-cols-3 h-10 items-center">
        <div></div>
        <div className=" flex items-center justify-center">
          <button className=" flex items-center text-neutral-500 gap-x-2">
            <Image
              src={"/networks/tron.svg"}
              alt="Tron Network"
              width={20}
              height={20}
            />
            <div className=" text-sm text-white">Tron RTX</div>
            <NavArrowDown fontSize={12} />
          </button>
        </div>
        <div className=" flex items-center justify-end">
          <button className=" text-neutral-500">
            <ScanQrCode />
          </button>
        </div>
      </header>
      <main className=" grid justify-center gap-y-12 pt-12">
        <Balance />
        <div className=" grid grid-cols-3 gap-x-8">
          <div>
            <TransButton>
              <Upload />
            </TransButton>
            <div className=" text-center mt-1 text-neutral-700">Send</div>
          </div>
          <div>
            <TransButton variant="primary">
              <Plus />
            </TransButton>
            <div className=" text-center mt-1 text-neutral-700">Add</div>
          </div>
          <div>
            <TransButton>
              <Download />
            </TransButton>
            <div className=" text-center mt-1 text-neutral-700">Receive</div>
          </div>
        </div>
        <Nav />
      </main>
    </>
  );
}

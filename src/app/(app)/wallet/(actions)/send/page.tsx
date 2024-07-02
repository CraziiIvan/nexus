import SendForm from "@/components/forms/sendForm";
import ProtectRoute from "@/components/protectRoute";
import { NavArrowLeft, Scanning } from "iconoir-react";
import Link from "next/link";

export default function Send() {

  return (
    <ProtectRoute>
      <header className=" flex justify-between items-center">
        <Link className="text-neutral-500" href={"./"}>
          <NavArrowLeft fontSize={14} />
        </Link>
        <div>Send</div>
        <Scanning fontSize={14} className="text-neutral-500" />
      </header>
      <main className=" pt-8 space-y-6">
        <SendForm/>
        <div className="w-full relative pt-4 before:absolute before:w-full before:h-px before:top-0 before:bg-gradient-to-r before:from-black before:via-neutral-700 before:to-black">
          <div>Recent</div>
          <div></div>
        </div>
      </main>
    </ProtectRoute>
  );
}

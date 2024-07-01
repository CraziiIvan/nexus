"use client";

import ProtectRoute from "@/components/protectRoute";
import Button from "@/components/ui/button";
import FormField from "@/components/ui/formField";
import api from "@/lib/api";
import { TSendFormSchema } from "@/lib/types";
import { NavArrowLeft, Scanning } from "iconoir-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Send() {
  const router = useRouter();

  const { handleSubmit, register } = useForm<TSendFormSchema>();

  const onsubmit: SubmitHandler<TSendFormSchema> = async (data) => {
    try {
      const response = await api.post("/trc-20/transaction/", data);
      console.log(response.data);
      router.push("/reciept");
    } catch (error) {
      console.error(error);
      alert("Failed to send!");
    }
  };

  return (
    <ProtectRoute>
      <header className=" flex justify-between items-center">
        <Link className="text-neutral-500" href={"./"}>
          <NavArrowLeft fontSize={14} />
        </Link>
        <div className="font-medium">Send</div>
        <Scanning fontSize={14} className="text-neutral-500" />
      </header>
      <main className=" pt-8 space-y-6">
        <form onSubmit={handleSubmit(onsubmit)}>
          <fieldset className=" space-y-6">
            <FormField
              {...register("recipient")}
              label="Recipient"
              placeholder="Nexus Id"
            />
            <FormField
              {...register("amount")}
              type="number"
              label="Amount"
              placeholder="Minimum 0.0000001"
            />
          </fieldset>
          <div className=" mt-12">
            <Button variant="primary" className=" w-full">
              Send
            </Button>
          </div>
        </form>
        <div className="w-full relative pt-4 before:absolute before:w-full before:h-px before:top-0 before:bg-gradient-to-r before:from-black before:via-neutral-700 before:to-black">
          <div>Recent</div>
          <div></div>
        </div>
      </main>
    </ProtectRoute>
  );
}

"use client";

import Button from "@/components/ui/button";
import FormField from "@/components/ui/formField";
import api from "@/lib/api";
import { sendFormSchema, TSendFormSchema } from "@/lib/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SendForm() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TSendFormSchema>({
    resolver: zodResolver(sendFormSchema),
  });

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
    <form onSubmit={handleSubmit(onsubmit)}>
      <fieldset className=" space-y-6">
        <FormField
          id="recipient"
          {...register("recipient")}
          error={errors.recipient?.message}
          label="Recipient"
          placeholder="Nexus Id"
        />
        <FormField
          id="amount"
          {...register("amount")}
          error={errors.amount?.message}
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
  );
}

"use client";

import { Button } from "@/components/ui/button";
import api from "@/lib/api";
import { sendFormSchema, TSendFormSchema } from "@/lib/schemas";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";

export default function SendForm() {
  const router = useRouter();

  const form = useForm<TSendFormSchema>({
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onsubmit)}>
        <fieldset className="space-y-6">
          <FormField
            control={form.control}
            name="recipient"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recipient</FormLabel>
                <FormControl>
                  <Input placeholder="Recipient" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input placeholder="Amount" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        <div className="mt-12">
          <Button className="w-full">Send</Button>
        </div>
      </form>
    </Form>
  );
}

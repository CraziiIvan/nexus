"use client";

import { Button } from "@/components/ui/button";
import api from "@/lib/api";
import { sendFormSchema, TSendFormSchema } from "@/lib/schemas";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
import { useState } from "react";
import { DialogHeader, Dialog, DialogContent, DialogDescription, DialogTitle  } from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { CheckCircle } from "lucide-react";
import { useToast } from "../ui/use-toast";

export default function SendForm() {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const { toast } = useToast();

  const form = useForm<TSendFormSchema>({
    resolver: zodResolver(sendFormSchema),
  });

  const onsubmit: SubmitHandler<TSendFormSchema> = async (data) => {
    try {
      const response = await api.post("/trc-20/transaction/", data);
      toast({description: "Transaction sent successfully!"});
    } catch (error) {
      console.error(error);
    }

    setTimeout(() => {
      setOpen(false)
    }, 5000)
  };

  return (
    <Form {...form}>
      <form>
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
          {
            isDesktop ? (
              <Dialog open={open} onOpenChange={setOpen}>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            ) : (
              <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                  <Button type="button" className="w-full">Send</Button>
                </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="text-left">
                  <CheckCircle size={32} className="mb-4"/>
                  <DrawerTitle>Confirm transaction</DrawerTitle>
                  <DrawerDescription>
                    Make sure you want to send this transaction.
                  </DrawerDescription>
                  <div>
                    hello
                  </div>
                </DrawerHeader>
                <DrawerFooter className="pt-2">
                  <Button type="submit" onClick={form.handleSubmit(onsubmit)}>Confirm</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancle</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            )
          }
        </div>
        </form>
    </Form>
  );
}

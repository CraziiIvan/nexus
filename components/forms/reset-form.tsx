"use client";

import api from "@/lib/api";
import {
  resetPasswordFormSchema,
  TResetPasswordFormSchema,
} from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AlertBox } from "../ui/alert-box";

export default function RestForm() {
    const router = useRouter();

    const form = useForm<TResetPasswordFormSchema>({
      resolver: zodResolver(resetPasswordFormSchema),
    });
  
    const onSubmit: SubmitHandler<TResetPasswordFormSchema> = async (data) => {
      try {
        await api.post("/auth/reset-password/", data);
        router.push("/login");
      } catch (error) {
        console.error(error);
        form.setError("root", { message: "Something went wrong. Please try again." });
      }
    };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset className="space-y-4">
          {form.formState.errors.root?.message && <AlertBox title="Invalid Email!" message={form.formState.errors.root?.message} variant="destructive" />}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Otp</FormLabel>
                <FormControl>
                  <Input type="otp" placeholder="otp" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        <div className="mt-12">
          <Button disabled={form.formState.isSubmitting} className="w-full">
            Reset Password
          </Button>
        </div>
      </form>
    </Form>
   )
}
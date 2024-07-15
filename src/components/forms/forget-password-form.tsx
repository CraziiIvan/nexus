"use client";

import api from "@/lib/api";
import {
  forgetPasswordFormSchema,
  TForgetPasswordFormSchema,
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
import { AlertBox } from "@/components/ui/alert-box";

export default function ForgetPasswordForm() {
  const router = useRouter();

  const form = useForm<TForgetPasswordFormSchema>({
    resolver: zodResolver(forgetPasswordFormSchema),
  });

  const onSubmit: SubmitHandler<TForgetPasswordFormSchema> = async (data) => {
    try {
      await api.post("/auth/request-otp/", data);
      router.push("/forgetPassword/reset");
    } catch (error) {
      console.error(error);
      form.setError("root", {
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset className="space-y-4">
          {form.formState.errors.root?.message && (
            <AlertBox
              title="Invalid Email!"
              message={form.formState.errors.root?.message}
              variant="destructive"
            />
          )}
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
        </fieldset>
        <div className="mt-12">
          <Button disabled={form.formState.isSubmitting} className="w-full">
            Send Code
          </Button>
        </div>
      </form>
    </Form>
  );
}

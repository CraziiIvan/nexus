"use client";

import Button from "@/components/ui/button";
import FormField from "@/components/ui/formField";
import api from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function Page() {

  const router = useRouter();

  const forgetPasswordFormSchema = z.object({
    email: z.string().email(),
  });

  type TForgetPasswordFormSchema = z.infer<typeof forgetPasswordFormSchema>;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<TForgetPasswordFormSchema>({
    resolver: zodResolver(forgetPasswordFormSchema),
  });

  const onSubmit: SubmitHandler<TForgetPasswordFormSchema> = async (data) => {
    try {
      await api.post("/auth/request-otp/", data);
      toast.success("Check your email for the code.");
      router.push("/forgetPassword/reset");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  
  return (
    <>
    <main className=" py-12 grid gap-12">
      <section>
        <h1 className="text-xl font-semibold">Forgot Your Password?</h1>
        <p className="mt-1 text-neutral-500">
          Enter your email address below, and we'll send you code to reset your password.
        </p>
      </section>
        <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="space-y-6">
        <FormField
          id="email"
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          {...register("email")}
          error={errors.email?.message}
        />
        </fieldset>
      <div className="mt-12">
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="primary"
          className="w-full"
        >
          Send Code
        </Button>
      </div>
    </form>
    </main>
  </>
  )
}

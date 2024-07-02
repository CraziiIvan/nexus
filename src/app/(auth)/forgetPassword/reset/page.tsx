"use client";

import Button from "@/components/ui/button";
import FormField from "@/components/ui/formField";
import api from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function Page() {

  const router = useRouter();

  const resetPasswordFormSchema = z.object({
    email: z.string().email(" Invalid email address"),
    otp: z.string().min(5, "Password must be at least 8 characters"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  });

  type TResetPasswordFormSchema = z.infer<typeof resetPasswordFormSchema>;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<TResetPasswordFormSchema>({
    resolver: zodResolver(resetPasswordFormSchema),
  });

  const onSubmit: SubmitHandler<TResetPasswordFormSchema> = async (data) => {
    try {
      await api.post("/auth/reset-password/", data);
      toast.success("Password has been reset successfully.");
      router.push("/login");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  
  return (
    <>
    <main className=" py-12 grid gap-12">
      <section>
        <h1 className="text-xl font-semibold">Confirm Your Email</h1>
        <p className="mt-1 text-neutral-500">
          Enter the code we sent to your email address below and, add the new password.
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
        <FormField
          id="otp"
          label="OTP"
          type="text"
          {...register("otp")}
          error={errors.otp?.message}
        />
        <FormField
          id="password"
          label="New Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
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
    <footer className="w-full text-center pb-8">
        <span className="text-neutral-700"> Didn't receive the code? </span>
        <Link href="/forgetPassword">Try again?</Link>
    </footer>
  </>
  )
}

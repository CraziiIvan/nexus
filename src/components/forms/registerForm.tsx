"use client";

import Button from "@/components/ui/button";
import FormField from "@/components/ui/formField";
import api from "@/lib/api";
import { signUpFormSchema, TSignUpFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export default function RegisterForm() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TSignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
  });

  const onSubmit: SubmitHandler<TSignUpFormSchema> = async (data) => {
    try {
      const { username, email, password } = data;
      await api.post("/auth/register/", { username, email, password });
      router.push("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="space-y-6">
        <FormField
          id="username"
          label="Username"
          type="text"
          placeholder="John Doe"
          {...register("username")}
          error={errors.email?.message}
        />
        <FormField
          id="email"
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          {...register("email")}
          error={errors.email?.message}
        />
        <FormField
          id="password"
          label="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />
        <FormField
          id="confirm-password"
          label="Confirm Password"
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
      </fieldset>
      <div className="mt-12">
        <Button type="submit" variant="primary" className="w-full">
          Create Account
        </Button>
      </div>
    </form>
  );
}

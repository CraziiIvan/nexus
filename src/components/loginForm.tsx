"use client";

import Button from "@/components/ui/button";
import FormField from "@/components/ui/formField";
import api from "@/lib/api";
import { logInFormSchema, TLoginFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export default function LoginForm() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    
  } = useForm<TLoginFormSchema>({
    resolver: zodResolver(logInFormSchema),
  });

  const onSubmit: SubmitHandler<TLoginFormSchema> = async (data) => {
    try {
      const response = await api.post("/auth/token/obtain/", data);
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh)
      router.push("/wallet");
    } catch (error) {
      console.error(error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
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
          id="password"
          label="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />
      </fieldset>
      <div className="mt-12">
        <Button type="submit" disabled={isSubmitting} variant="primary" className="w-full">
          Login Account
        </Button>
      </div>
    </form>
  );
}

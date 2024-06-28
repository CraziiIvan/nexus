"use client";

import Link from "next/link";
import Button from "@/components/ui/button";
import FormField from "@/components/ui/formField";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { logInFormSchema, TLoginFormSchema,  } from "@/lib/types";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function Page() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TLoginFormSchema>({
    resolver: zodResolver(logInFormSchema),
  });

  const router = useRouter()

  const onSubmit: SubmitHandler<TLoginFormSchema> = async (data) => {
    try {
      const response = await api.post('/auth/token/obtain/', data);
      localStorage.setItem('token', response.data.token);
      router.push('/');
    } catch (error) {
      console.error(error);
      alert('Login failed. Please check your credentials.');
    }
  };
  
  return (
    <>
      <main className=" py-12 grid gap-12">
        <section>
          <h1 className="text-2xl font-semibold">Welcome Back!</h1>
          <p className="mt-1 text-neutral-500">
            Login to your account
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
              id="password"
              label="Password"
              type="password"
              {...register("password")}
              error={errors.password?.message}
            />
          </fieldset>
          <div className="mt-12">
            <Button type="submit" variant="primary" className="w-full">
              Login Account
            </Button>
          </div>
        </form>
      </main>
      <footer className="w-full text-center">
        <span className="text-neutral-700">Don't have an account? </span>
        <Link href="/signUp">Sign Up</Link>
      </footer>
    </>
  );
}

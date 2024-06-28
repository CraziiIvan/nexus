"use client";

import Link from "next/link";
import Button from "@/components/ui/button";
import FormField from "@/components/ui/formField";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormSchema, TSignUpFormSchema,  } from "@/lib/types";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function Page() {

  const router = useRouter()

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
      await api.post('/auth/register/', { username, email, password });
      router.push('/login');
    } catch (error) {
      console.error(error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <>
      <main className=" py-12 grid gap-12">
        <section>
          <h1 className="text-2xl font-semibold">Create Account</h1>
          <p className="mt-1 text-neutral-500">
            Join us and manage your crypto
          </p>
        </section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="space-y-6">
            <FormField
              id="username"
              label="Username"
              type="text"
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
      </main>
      <footer className="w-full text-center">
        <span className="text-neutral-700">Already have an account? </span>
        <Link href="/login">Login</Link>
      </footer>
    </>
  );
}

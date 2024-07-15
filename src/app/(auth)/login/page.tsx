import LoginForm from "@/components/forms/login-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <main className="space-y-6 py-6">
        <section>
          <h1 className="text-xl font-semibold">Welcome Back!</h1>
          <p className="text-gray10">Login to your account</p>
        </section>
        <LoginForm />
      </main>
      <footer className="w-full pb-8 text-center">
        <Link href="/register" className="text-gray10 text-sm">Don't have an account? </Link>
      </footer>
    </>
  );
}

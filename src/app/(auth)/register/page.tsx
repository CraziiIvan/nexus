

import RegisterForm from "@/components/forms/registerForm";
import Link from "next/link";

export default function Page() {

  return (
    <>
      <main className=" py-12 grid gap-12">
        <section>
          <h1 className="text-xl font-semibold">Create Account</h1>
          <p className="mt-1 text-neutral-500">
            Join us and manage your crypto
          </p>
        </section>
        <RegisterForm/>
      </main>
      <footer className="w-full text-center">
        <span className="text-neutral-700">Already have an account? </span>
        <Link href="/login">Login</Link>
      </footer>
    </>
  );
}

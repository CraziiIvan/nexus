import LoginForm from "@/components/loginForm";
import Link from "next/link";

export default function Page() {

  return (
    <>
      <main className=" py-12 grid gap-12">
        <section>
          <h1 className="text-xl font-semibold">Welcome Back!</h1>
          <p className="mt-1 text-neutral-500">
            Login to your account
          </p>
        </section>
        <LoginForm/>
      </main>
      <footer className="w-full text-center">
        <span className="text-neutral-700">Don't have an account? </span>
        <Link href="/register">Register</Link>
      </footer>
    </>
  );
}

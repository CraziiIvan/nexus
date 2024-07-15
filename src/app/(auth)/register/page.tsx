import RegisterForm from "@/components/forms/register-form";
import Link from "next/link";

export default function Page() {

  return (
    <>
      <main className=" py-6 space-y-6">
        <section>
          <h1 className="text-xl font-semibold">Create Account</h1>
          <p className="text-gray10">
            Join us and manage your crypto
          </p>
        </section>
        <RegisterForm/>
      </main>
      <footer className="w-full text-center pb-8">
        <Link href="/login" className="text-gray10 text-sm">Already have an account?</Link>
      </footer>
    </>
  );
}

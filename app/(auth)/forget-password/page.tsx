import ForgetPasswordForm from "@/components/forms/forget-password-form";

export default function Page() {
  
  return (
    <>
    <main className=" py-6 space-y-6">
      <section>
        <h1 className="text-xl font-semibold">Forgot Your Password?</h1>
        <p className="text-gray10">
          Enter your email address below, and we'll send you code to reset your password.
        </p>
      </section>
      <ForgetPasswordForm/>
    </main>
  </>
  )
}

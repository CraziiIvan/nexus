import RestForm from "@/components/forms/reset-form";

export default function RestPage() {
  return (
    <>
      <main className="space-y-6 py-6">
        <section>
          <h1 className="text-xl font-semibold">Reset Password</h1>
          <p className="text-gray10">
            Enter the otp and new password you want to set.
          </p>
        </section>
        <RestForm/>
        <footer className="w-full pb-8 text-center">
        <div className="text-gray10 text-sm">Don't get the otp?</div>
      </footer>
      </main>
    </>
  );
}

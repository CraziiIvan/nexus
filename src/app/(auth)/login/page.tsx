import Button from '@/components/ui/button';
import FormField from '@/components/ui/formField';
import Link from 'next/link';

export default function Page() {
  return (
  <>
      <main className="grid gap-12">
      <section>
        <h1 className="text-2xl font-semibold">Welcome Back!</h1>
        <p className="mt-1 text-neutral-500">
          Log in to your account
        </p>
      </section>
      <form>
        <fieldset className="space-y-6">
          <FormField
            id="email"
            label="Email"
            type="email"
            placeholder="example@gmail.com"
          />
          <FormField
            id="password"
            label="Password"
            type="password"
          />
        </fieldset>
        <div className="mt-12">
          <Button type="submit" variant="primary" className="w-full">
            Login Account
          </Button>
        </div>
      </form>
    </main>
        <footer className=" w-full text-center mt-24">
          <span className=" text-neutral-700">Don't have an account? </span><Link href="/signUp">Create</Link>
        </footer>
  </>
  );
}


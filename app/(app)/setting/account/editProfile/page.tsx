import {Button} from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function EditProfilePage() {
  return (
    <>
      <header className="flex items-center gap-x-4">
        <Link className="text-gray8" href={"./"}>
          <ChevronLeft fontSize={14} />
        </Link>
        Edit profile
      </header>
      <main className="mt-8">
        <div>Edit your profile information</div>
        <p className=" text-neutral-500">Fill your information to edit your profile</p>
        <form className=" mt-8">
            {/* <fieldset className="flex flex-col gap-y-4 mt-8">
              <legend className="mb-4">Personal information</legend>
              <FormField label="First Name" placeholder="First Name" />
              <FormField label="Last Name" placeholder="Last Name" />
              <FormField label="Date of Birth" placeholder="" type="date" />
            </fieldset>
            <fieldset className="flex flex-col gap-y-4 mt-8">
              <legend className="mb-4">Contact information</legend>
              <FormField label="Phone" placeholder="+886 1234567890" />
            </fieldset>
            <fieldset className="flex flex-col gap-y-4 mt-8">
              <legend className="mb-4">Address</legend>
              <FormField label="Address" placeholder="123 Main Street" />
              <FormField label="City" placeholder="Bangkok" />
              <FormField label="Postcode" placeholder="10320" />
            </fieldset> */}
            <div className=" mt-12 mb-32">
                <Button className="w-full">Save</Button>
            </div>
        </form>
      </main>
    </>
  );
}

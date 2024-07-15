import Button from "@/components/ui/button";
import { NavArrowLeft, NavArrowRight } from "iconoir-react";
import Link from "next/link";

const acountSettings = [
  { name: "Edit profile", href: "/setting/account/editProfile", danger: false },
  {
    name: "Change password",
    href: "/setting/account/changePassword",
    danger: false,
  },
  { name: "Change email", href: "/setting/account/changeEmail", danger: false },
];

export default function AccountPage() {
  return (
    <>
      <header className="flex items-center gap-x-4">
        <Link className="text-neutral-500" href={"./"}>
          <NavArrowLeft fontSize={14} />
        </Link>
        Account
      </header>
      <div className="mt-8 flex items-center gap-x-4">
        <div className="aspect-square h-12 w-12 rounded-full border border-neutral-800 bg-neutral-900"></div>
        <div>
          <div className="font-medium">User Name</div>
          <div className="text-neutral-500 text-sm">User Id</div> 
        </div>
      </div>
      <div className="mt-8 flex flex-col items-end">
        {acountSettings.map((setting) => (
          <Link
            key={setting.name}
            href={setting.href}
            className="flex w-full items-center justify-between py-3 text-neutral-500"
          >
            <div className="text-neutral-100">{setting.name}</div>
            <NavArrowRight fontSize={12} />
          </Link>
        ))}
        <div className="flex w-full items-center justify-between mt-8 text-neutral-500">
          <Button variant="secondary" size="small" className="text-white">
            Logout
          </Button>
          <Button variant="secondary" size="small" className="text-red-500">
            Delete account
          </Button>
        </div>
      </div>
    </>
  );
}

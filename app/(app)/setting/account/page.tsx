import {Button} from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
        <Link className="text-gray9" href={"./"}>
          <ChevronLeft size={20} />
        </Link>
        Account
      </header>
      <div className="mt-8 flex items-center gap-x-4">
        <div className="aspect-square h-12 w-12 rounded-full border border-gray4 bg-gray1"></div>
        <div>
          <div className="font-medium">User Name</div>
          <div className="text-gray11 text-sm">User Id</div> 
        </div>
      </div>
      <div className="mt-8 flex flex-col items-end">
        {acountSettings.map((setting) => (
          <Link
            key={setting.name}
            href={setting.href}
            className="flex w-full items-center justify-between py-3 text-gray9"
          >
            <div className="text-black">{setting.name}</div>
            <ChevronRight size={20} />
          </Link>
        ))}
        <div className="flex w-full items-center justify-between mt-8">
          <Button variant="secondary">
            Logout
          </Button>
          <Button variant="destructive">
            Delete account
          </Button>
        </div>
      </div>
    </>
  );
}

import Home from "@/components/home";
import { Bell } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <div className="h-9 w-9 rounded-full border border-gray4 bg-gray2"></div>
          <div>
            <div className="font-medium leading-5">Username</div>
            <div className="text-gray8 text-sm leading-4">@username</div>
          </div>
        </div>
        <Bell size={20} className="text-gray9" />
      </header>
      <main className="flex grow flex-col mt-6">
        <Home />
      </main>
    </>
  );
}

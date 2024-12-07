import UserCard from "@/components/cards/user-card";
import Home from "@/components/home";
import AssetsCardContainer from "@/components/layouts/assets-card-container";
import { Bell } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <header className="flex items-center justify-between md:hidden">
        <UserCard />
        <Bell size={20} className="text-gray9" />
      </header>
      <main className="mt-6 grow grid grid-cols-1 md:grid-cols-4 md:gap-4 ">
        <Home />
        <AssetsCardContainer />
      </main>
    </>
  );
}

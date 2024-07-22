import UserCard from "@/components/cards/user-card";
import Home from "@/components/home";
import AssetsCardContainer from "@/components/layouts/assets-card-container";
import { Bell } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <header className="flex items-center justify-between">
        <UserCard />
        <Bell size={20} className="text-gray9" />
      </header>
      <main className="mt-6 flex grow flex-col">
        <Home />
        <AssetsCardContainer />
      </main>
    </>
  );
}

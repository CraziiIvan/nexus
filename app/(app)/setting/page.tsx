"use client"

import SettingCard from "@/components/cards/settingCard";
import SearchBar from "@/components/ui/search-bar";
import { Eye, Shield, User, Wallet } from "lucide-react";
import { useState } from "react";

const mainSetting = [
{ title: "Account", icon: <User size={20} />, description: "Manage your personal information", href: "/setting/account" },
{ title: "Wallet", icon: <Wallet size={20} />, description: "Configure wallet preferences and transaction settings", href: "/setting/wallet" },
{ title: "Appearance", icon: <Eye size={20} />, description: "Personalize the app’s look and feel", href: "/setting/appearance" },
{ title: "Security", icon: <Shield  size={20}/>, description: "Enhance your account security with additional measures", href: "/setting/security" },
]

export default function Setting() {

  const [search, setSearch] = useState("");

  function handleSearch(e: any) {
    setSearch(e.target.value);
  }

  return (
    <>
      <header className=" text-lg mb-4">Settings</header>
      <SearchBar value={search} onChange={handleSearch} />
      <div className="flex flex-col gap-y-6 mt-6">
        { mainSetting.map((item, index) => (
          <SettingCard
            key={index}
            title={item.title}
            icon={item.icon}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>
    </>
  );
}

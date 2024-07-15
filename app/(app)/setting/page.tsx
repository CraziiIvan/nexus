import SettingCard from "@/components/cards/settingCard";
import SearchBar from "@/components/ui/searchBar";
import { Eye, Shield, User, Wallet } from "iconoir-react";

const mainSetting = [
{ title: "Account", icon: <User />, description: "Manage your personal information", href: "/setting/account" },
{ title: "Wallet", icon: <Wallet />, description: "Configure wallet preferences and transaction settings", href: "/setting/wallet" },
{ title: "Appearance", icon: <Eye />, description: "Personalize the app’s look and feel", href: "/setting/appearance" },
{ title: "Security", icon: <Shield />, description: "Enhance your account security with additional measures", href: "/setting/security" },
]

export default function Setting() {
  return (
    <>
      <header className=" text-lg mb-4">Settings</header>
      <SearchBar />
      <div className="flex flex-col gap-y-6 mt-8">
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

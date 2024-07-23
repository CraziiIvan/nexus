import Nav from "@/components/layouts/nav";
import SideBar from "@/components/layouts/side-bar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideBar/>
      <header>
        
      </header>
      {children}
      <Nav />
      <div className=" z-30 fixed bottom-0 inset-x-0 bg-gradient-to-t from-white md:hidden to-transparent h-20" />
    </>
  );
}

import Nav from "@/components/layouts/nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Nav />
      <div className=" z-30 fixed bottom-0 inset-x-0 bg-gradient-to-t from-white to-transparent h-20" />
    </>
  );
}

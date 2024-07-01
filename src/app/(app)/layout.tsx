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
    </>
  );
}

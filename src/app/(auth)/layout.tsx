export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className=" mb-12"></header>
      {children}
    </>
  );
}

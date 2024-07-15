import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex justify-start">
        <div className="rounded-lg bg-gradient-to-br from-gray12 to-black p-1">
          <Image src={"/nexus.svg"} alt="Nexus" width={24} height={24} />
        </div>
      </header>
      {children}
    </>
  );
}

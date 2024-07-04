import Image from "next/image";

export default function Loading() {
  return (
    <div className=" flex items-center justify-center h-svh w-full animate-pulse duration-700">
      <Image src="/nexus.svg" alt="Nexus" width={40} height={40}/>
    </div>
  )
}

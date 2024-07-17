import Image from "next/image";

export default function Loading() {
  return (
    <div className="grow w-full flex items-center justify-center animate-pulse duration-1000">
      <Image src="/loading.svg" alt="Nexus" width={48} height={48}/>
    </div>
  )
}

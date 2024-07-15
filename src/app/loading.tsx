import Image from "next/image";

export default function Loading() {
  return (
    <div className="grow w-full flex items-center justify-center">
      <Image src="/loading.svg" alt="Nexus" width={48} height={48}/>
    </div>
  )
}

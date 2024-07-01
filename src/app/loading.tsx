import Image from "next/image";

export default function Loading() {
  return (
    <div className=" flex items-center justify-center h-full w-full">
      <Image src="/nexus.svg" alt="Nexus" width={50} height={50}/>
    </div>
  )
}

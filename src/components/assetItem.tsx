import Image from "next/image"
import Status from "./ui/status"

type TAssetItemProps = {
    src: string
    alt: string
    name: string
    price: string
    change: number
    quantity: string
    value?: string
}

export default function AssetItem({ src, alt, name, price, change, quantity, value }: TAssetItemProps){
    return (
      <div className="flex items-center justify-between w-full">
      <div className="flex gap-x-4">
        <Image src={src} alt={alt} width={38} height={38} />
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm flex gap-x-2 text-neutral-400">
            {price} <Status icon={false} percent={change}/>
          </div>
        </div>
      </div>
      <div>
        <div className="font-medium text-end">{quantity}</div>
        <div className="text-sm text-neutral-400 text-end">{value}</div>
      </div>
    </div>
    )
}
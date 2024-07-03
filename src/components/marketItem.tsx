import Image from "next/image"
import Status from "./ui/status"
import { formatter } from "@/lib/helper"

export type TMarketItemProps = {
    id: string
    name: string
    symbol: string
    image: string
    current_price: string
    price_change_percentage_24h: number
}

export default function MarketItem({ name, image, id, current_price, price_change_percentage_24h, symbol }: TMarketItemProps){
    return (
      <div className="flex items-center justify-between w-full">
      <div className="flex gap-x-4">
        <Image src={`/cryptos/${id}.svg`} alt={id} width={36} height={36} />
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-neutral-400">
            {symbol}
          </div>
        </div>
      </div>
      <div>
        <div className="font-medium text-end">{formatter.format(parseFloat(current_price))}</div>
        <div className="text-sm text-neutral-400 flex justify-end"><Status icon={false} percent={price_change_percentage_24h}/></div>
      </div>
    </div>
    )
}
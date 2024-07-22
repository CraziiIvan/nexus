import { formatter } from "@/lib/helper";
import Image from "next/image";
import Status from "@/components/ui/status";

type TTokenCardProps = {
    image: string,
    name: string,
    symbol: string,
    current_price: number,
    price_change_percentage_24h: number,
    currency: string,
}

export default function TokenCard({ image, name, symbol, current_price, price_change_percentage_24h, currency }: TTokenCardProps) {

  const currencyFormatter = formatter(currency);

    return (
        <div className="flex items-center gap-x-4 py-2.5">
        <Image
          src={image}
          alt={name}
          width={38}
          height={38}
        />
        <div className="flex grow items-center justify-between">
          <div>
            <div className="font-medium">{name}</div>
            <div className="text-sm text-gray11">
              {symbol}
            </div>
          </div>
          <div>
            <div className="text-end font-medium">
              {currencyFormatter.format(current_price)}
            </div>
            <Status percent={price_change_percentage_24h} />
          </div>
        </div>
      </div>
    )
}
import MarketItem, { TMarketItemProps } from "@/components/marketItem";
import SearchBar from "@/components/ui/searchBar";
import { getData } from "./action";

export default async function MarketPage() {

  const data: TMarketItemProps[] = await getData();

  return (
    <>
    <div>
      <SearchBar  />
    </div>
    <main className=" mt-8">
      <div className="mt-8 grid gap-y-6">
        {data.map((item, index) => (
          <MarketItem
            key={index}
            id={item.id}
            name={item.name}
            symbol={item.symbol}
            image={item.image}
            current_price={item.current_price}
            price_change_percentage_24h={item.price_change_percentage_24h}
          />
        ))}
      </div>
    </main>
    </>
  )
}
"use client"

import MarketItem, { TMarketItemProps } from "@/components/marketItem";
import SearchBar from "@/components/ui/searchBar";
import { useEffect, useState } from "react";

export default function Market() {

  const [data, setData] = useState<TMarketItemProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=false&price_change_percentage=24h");
        const data = await response.json();
        setData(data.map((item: any) => ({
          id: item.id,
          name: item.name,
          symbol: item.symbol,
          image: item.image,
          current_price: item.current_price,
          price_change_percentage_24h: item.price_change_percentage_24h,
        })));
      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
  })

  return (
    <>
    <div>
      <SearchBar />
    </div>
    <main className=" mt-8">
      <div className="mt-8 grid gap-y-6">
        {data.map((item, index) => (
          <MarketItem
            key={index}
            {...item}
          />
        ))}
      </div>
    </main>
    </>
  )
}

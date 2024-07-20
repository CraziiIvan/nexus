"use client";

import SearchBar from "@/components/ui/search-bar";
import { useGetMarket } from "@/lib/hooks/useGetMarket";
import Image from "next/image";
import { formatter } from "@/lib/helper";
import Status from "@/components/ui/status";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LoaderCircle, SlidersHorizontal } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { TMarketQueryParams } from "@/lib/types";

export default function MarketPage() {
  const [filters, setFilters] = useState({
    vs_currency: "usd",
    order: "market_cap_desc",
    sparkline: false,
    price_change_percentage: "24h",
  });

  const [search, setSearch] = useState("");

  const { data, fetchNextPage, isFetchingNextPage, isLoading, hasNextPage } =
    useGetMarket(filters);

  const [ ref, inView ] = useInView({
    threshold: 0.5,
  });

  const handleFilterChange = (newFilters: Partial<TMarketQueryParams>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const currencyFormatter = formatter(filters.vs_currency);

  return (
    <>
      <header className="flex items-center justify-between text-lg font-medium">
        Market{" "}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="gap-x-1 bg-gray1 font-normal"
            >
              <SlidersHorizontal size={12} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mx-2 space-y-5 p-4">
            <DropdownMenuGroup className="flex items-center justify-between gap-x-4">
              <div>Currency</div>
              <ToggleGroup
                type="single"
                variant="outline"
                className="gap-x-2"
                value={filters.vs_currency}
                onValueChange={(value) =>
                  handleFilterChange({ vs_currency: value })
                }
                aria-label="Select Currency"
              >
                <ToggleGroupItem value="usd">USD</ToggleGroupItem>
                <ToggleGroupItem value="eur">EUR</ToggleGroupItem>
                <ToggleGroupItem value="gbp">GBP</ToggleGroupItem>
              </ToggleGroup>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="mt-4">
        <SearchBar value={search} onChange={handleSearchChange} />
        <div className="mt-2">
          <ScrollArea className="pb-24">
            {data?.pages.map(
              (page) =>
                page &&
                page.map((token, index) => (
                  <div key={index} className="flex items-center gap-x-4 py-2.5">
                    <Image
                      src={token.image}
                      alt={token.name}
                      width={38}
                      height={38}
                    />
                    <div className="flex grow items-center justify-between">
                      <div>
                        <div className="font-medium">{token.name}</div>
                        <div className="text-sm text-gray11">
                          {token.symbol}
                        </div>
                      </div>
                      <div>
                        <div className="text-end font-medium">
                          {currencyFormatter.format(token.current_price)}
                        </div>
                        <Status percent={token.price_change_percentage_24h} />
                      </div>
                    </div>
                  </div>
                )),
            )}
            <div
              className="flex w-full items-center justify-center py-2"
              ref={ref}
            >
              {(isLoading || isFetchingNextPage) && (
                <LoaderCircle className="animate-spin" />
              )}
            </div>
          </ScrollArea>
        </div>
      </main>
    </>
  );
}

import { useInfiniteQuery } from "@tanstack/react-query";
import { getMarket } from "@/lib/actions/get-market";
import { TMarketQueryParams } from "@/lib/types";

export function useGetMarket(filters: Omit<TMarketQueryParams, 'pageParam'>) {
  return useInfiniteQuery({
    queryKey: ["market", filters],
    queryFn: ({ pageParam = 1 }) => getMarket({ ...filters, pageParam }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage && lastPage.length === 0) {
        return undefined;
      }
      return pages.length + 1;
    },
    initialPageParam: 1,
  });
}

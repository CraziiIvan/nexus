import { useQuery } from "@tanstack/react-query";
import { getHistory } from "../actions/get-history";
import { TTransaction } from "../types";

export function useGetHistory() {
  return useQuery<TTransaction[]>({
    queryKey: ["history"],
    queryFn: getHistory,
  })
} 
import { useQuery } from "@tanstack/react-query";
import { getWallet } from "@/lib/actions/get-wallet";

export function useGetWallet() {
  return useQuery({
    queryKey: ["wallet"],
    queryFn: getWallet,
  });
}
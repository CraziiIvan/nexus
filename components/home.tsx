import Balance from "@/components/balance";;
import BalanceChart from "@/components/charts/balance-chart";

export default function Home() {

  return (
    <div className=" md:p-6 md:col-span-2 md:rounded-2xl md:border md:border-gray4">
      <Balance />
      <BalanceChart/>
    </div>
  );
}

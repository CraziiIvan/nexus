import api from "./api";
import { formatter } from "./helper";

export async function getBalance() {
  try {
    const response = await api.get("/trc-20/wallet/details/");
    return formatter.format(response.data.balance)
  } catch (error) {
    throw error;
  }
}

export async function getAddress() {
  try {
    const response = await api.get("/trc-20/wallet/details/");
    console.log(response.data.address)
  } catch (error) {
    throw error;
  }
}

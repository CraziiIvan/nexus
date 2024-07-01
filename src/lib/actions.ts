import api from "./api";
import { formatter } from "./helper";

export async function getWallet() {
  try {
    const response = await api.get("/trc-20/wallet/details/");
    return response.data
  } catch (error) {
    throw error;
  }
} 

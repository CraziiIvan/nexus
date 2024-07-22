import api from "@/lib/api";

export async function getWallet() {
  try {
    const { data } = await api.get("/trc-20/wallet/details/");
    return data
  } catch (error) {
    throw error;
  }
} 

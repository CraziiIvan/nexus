import api from "./api";

export async function getWallet() {
  try {
    const response = await api.get("/trc-20/wallet/details/");
    return response.data
  } catch (error) {
    throw error;
  }
} 

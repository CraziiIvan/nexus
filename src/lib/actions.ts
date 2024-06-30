import api from "./api";

export async function getBalance() {
  try {
    const response = await api.get("/trc-20/wallet/details/");
    console.log(response.data);
    return response.data.balance;
  } catch (error) {
    throw error;
  }
}

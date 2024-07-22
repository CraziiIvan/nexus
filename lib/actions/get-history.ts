import api from "@/lib/api";

export async function getHistory() {
    try {
        const response = await api.get("/trc-20/transaction/history/");
        return response.data
      } catch (error) {
        console.error(error);
      }
} 

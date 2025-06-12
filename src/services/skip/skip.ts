import { backendService } from "@/api/api";
import { API_URLS } from "@/api/constants";
import { Skip } from "./skip.types";

const skipService = {
  getSkips: async () => {
    const response = await backendService.get<Skip[]>(API_URLS.skips);
    return response.data;
  }
};

export default skipService;

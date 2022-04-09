import { apiClient } from "@/common/axiosService";
import ResponseData from "@/interface/ResponseData";

class ApiServiceReal {
  async get(url: string): Promise<any> {
    const response: ResponseData = await apiClient.get(url);
    console.log(response.data, "response");
    return response.data;
  }
}

export default new ApiServiceReal();

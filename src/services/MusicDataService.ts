import apiService from '@/common/api.service'
import Song from "@/interface/Song";
import ResponseData from "@/interface/ResponseData";

class MusicDataService {
  async getSongs(artistName: string): Promise<any> {
    const response: ResponseData = await apiService.get(`search?q=${artistName}&output=jsonp`);
    console.log(response.data, "response");
    return response.data;
  }
}

export default new MusicDataService();

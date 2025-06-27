import axios from "axios";
import type { AxiosRequestConfig } from "axios";

export async function getPostResponseContent(
  url: string,
  postContent: object,
  config?: AxiosRequestConfig
): Promise<string> {
  const requestConfig: AxiosRequestConfig = {
    ...config,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:139.0) Gecko/20100101 Firefox/139.0",
      ...config?.headers,
    },
  };
  const response = await axios.post(url, postContent, requestConfig);
  return response.data;
}

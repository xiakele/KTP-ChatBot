import axios, { AxiosRequestConfig } from "axios";

const defaultConfig: AxiosRequestConfig = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:139.0) Gecko/20100101 Firefox/139.0",
  },
};

export async function getPostResponseContent(
  url: string,
  postContent: object,
  config?: AxiosRequestConfig
): Promise<string> {
  const response = await axios.post(url, postContent, {
    ...defaultConfig,
    ...config,
  });
  return response.data;
}

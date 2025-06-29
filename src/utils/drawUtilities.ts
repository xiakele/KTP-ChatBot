import type { ApiImageRequestBody, ApiImageResponse } from "../types.ts";
import { getPostResponse } from "./fetchUtilities.ts";

export async function getImageUrl(prompt: string, apiKey: string) {
  const baseUrl = "https://api.siliconflow.cn/v1/images/generations";
  const body: ApiImageRequestBody = {
    model: "Kwai-Kolors/Kolors",
    prompt: prompt,
    image_size: "1024x1024",
    batch_size: 1,
    num_inference_steps: 20,
    guidance_scale: 7.5,
  };
  const response = await getPostResponse(baseUrl, JSON.stringify(body), {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  });
  if (!response.ok) {
    throw new Error(
      `Image generation failed: ${response.status} ${response.statusText}\n${await response.text()}`
    );
  }
  const data = (await response.json()) as ApiImageResponse;
  const imgUrl = data?.images[0]?.url;
  return imgUrl;
}

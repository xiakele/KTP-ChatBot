import type { Opts } from "grammy/types";

interface SearchResult {
  title: string;
  link: string;
  description?: string;
}

export type SearchResults = SearchResult[];

export type ReplyOptions = Omit<Opts<"sendMessage">, "text" | "chat_id">;

export interface ApiImageResponse {
  images: { url: string }[];
  [key: string]: object;
}

export interface ApiImageRequestBody {
  model: string;
  prompt: string;
  image_size: string;
  batch_size: number;
  num_inference_steps: number;
  guidance_scale: number;
}

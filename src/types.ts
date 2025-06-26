import type { Opts } from "grammy/types";

interface SearchResult {
  title: string;
  link: string;
  description?: string;
}

export type SearchResults = SearchResult[];

export type ReplyOptions = Omit<Opts<"sendMessage">, "text" | "chat_id">;

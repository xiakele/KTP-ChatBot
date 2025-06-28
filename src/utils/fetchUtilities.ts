import { fetch, type HeadersInit } from "undici";

export async function getPostResponseContent(
  url: string,
  postContent: Record<string, string>,
  headers?: HeadersInit
) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:139.0) Gecko/20100101 Firefox/139.0",
      ...headers,
    },
    body: new URLSearchParams(postContent),
  });
  return await response.text();
}

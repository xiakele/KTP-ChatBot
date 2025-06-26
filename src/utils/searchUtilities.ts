import type { SearchResults } from "../types.js";
import * as cheerio from "cheerio";
import { getPostResponseContent } from "../utils/axiosUtilities.js";
import { FormattedString } from "@grammyjs/parse-mode";

export async function getSearchResults(
  query: string
): Promise<string | FormattedString> {
  const baseUrl = `https://html.duckduckgo.com/lite/`;
  const $ = cheerio.load(
    await getPostResponseContent(
      baseUrl,
      { q: query },
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    )
  );
  const $links = $("a.result-link");
  const $descriptions = $("td.result-snippet");
  const results: SearchResults = [];
  $links.each((index, element) => {
    const title = $(element).text().trim();
    const link = $(element).attr("href");
    let description = $descriptions.eq(index).text().trim();
    if (description.length > 100) {
      description = description.slice(0, 100) + "...";
    }
    if (title && link) {
      results.push({ title, link, description });
    }
  });
  const formattedResults = formatSearchResults(query, results.slice(0, 3));
  return formattedResults;
}

function formatSearchResults(
  query: string,
  results: SearchResults
): string | FormattedString {
  if (!results) {
    return "No results found";
  }
  let formattedString = FormattedString.bold("Search results for ")
    .bold(FormattedString.underline(query))
    .plain(": \n");
  for (const [index, result] of results.entries()) {
    formattedString = formattedString
      .plain(`${index + 1}. `)
      .link(result.title, result.link);
    if (result.description) {
      formattedString = formattedString.plain(`\n${result.description}`);
    }
    formattedString = formattedString.plain("\n\n");
  }
  formattedString = formattedString
    .italic("Source: ")
    .italic(
      FormattedString.link("DuckDuckGo", `https://duckduckgo.com/?q=${query}`)
    );
  return formattedString;
}

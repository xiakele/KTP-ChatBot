import type { Context } from "grammy";
import { getSearchResults } from "../utils/searchUtilities.js";
import {
  getCommandContent,
  replyWithReply,
} from "../utils/contextUtilities.js";

export async function search(context: Context) {
  const query = getCommandContent(context);
  if (!query) {
    replyWithReply(context, "Query not specified!");
    return;
  }
  const searchResults = await getSearchResults(query);
  replyWithReply(context, searchResults, {
    link_preview_options: { is_disabled: true },
  });
}

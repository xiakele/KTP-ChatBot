import type { Context } from "grammy";
import {
  getCommandContent,
  replyWithReply,
} from "../utils/contextUtilities.js";

export async function echo(context: Context) {
  const echoContent = getCommandContent(context, "echo");
  await replyWithReply(context, echoContent);
}

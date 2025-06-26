import type { BotError } from "grammy";
import { replyWithReply } from "./contextUtilities.js";

export async function errorHandler(error: BotError): Promise<void> {
  const context = error.ctx;
  console.error("An error occurred:", error.message);
  await replyWithReply(context, "An error occurred.");
}

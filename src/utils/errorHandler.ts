import type { BotError } from "grammy";
import { replyWithReply } from "./contextUtilities.js";

export async function errorHandler(error: BotError): Promise<void> {
  const context = error.ctx;
  console.error("An error occurred:", error.message);
  try {
    await replyWithReply(context, "An error occurred.");
  } catch {
    try {
      await context.reply("An error occurred.");
    } catch {
      console.log(
        "Failed to notify error to user. Check internet connections."
      );
    }
  }
}

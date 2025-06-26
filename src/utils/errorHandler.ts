import type { BotError } from "grammy";

export async function errorHandler(error: BotError): Promise<void> {
  const context = error.ctx;
  const messageId = context.message?.message_id;
  console.error("An error occurred:", error.message);
  await (messageId
    ? context.reply("An error occurred.", {
        reply_parameters: { message_id: messageId },
      })
    : context.reply("An error occurred."));
}

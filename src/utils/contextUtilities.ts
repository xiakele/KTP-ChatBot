import type { Context } from "grammy";
import type { ReplyOptions } from "../types.js";
import { FormattedString } from "@grammyjs/parse-mode";

export function getCommandContent(context: Context): string | undefined {
  const messageContent = context.message?.text;
  const commandContent = messageContent?.replace(/\/\w+(@\w+)?/, "").trim();
  return commandContent;
}

export async function replyWithReply(
  context: Context,
  replyContent: string | FormattedString,
  options?: ReplyOptions
) {
  const messageId = context.message?.message_id;
  const replyOptions: ReplyOptions = {
    reply_parameters: messageId ? { message_id: messageId } : undefined,
    ...options,
  };
  if (replyContent instanceof FormattedString) {
    await context.reply(replyContent.text, {
      ...replyOptions,
      entities: replyContent.entities,
    });
    return;
  }
  return await context.reply(replyContent, replyOptions);
}

import type { Context } from "grammy";
import { formatCommandList } from "../config/commandList.js";
import { replyWithReply } from "../utils/contextUtilities.js";

export async function help(context: Context) {
  const commandList = formatCommandList();
  const helpMessage = `Available commands:\n${commandList}`;
  await replyWithReply(context, helpMessage);
}

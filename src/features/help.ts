import type { Context } from "grammy";
import { formatCommandList } from "../config/commandList.js";

export async function help(context: Context) {
  const commandList = formatCommandList();
  const helpMessage = `Available commands:\n${commandList}`;
  await context.reply(helpMessage);
}

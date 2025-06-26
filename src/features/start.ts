import type { Context } from "grammy";
import { formatCommandList } from "../config/commandList.js";

export async function start(context: Context) {
  await context.reply(`Welcome to KTP ChatBot! \n${formatCommandList()}`);
}

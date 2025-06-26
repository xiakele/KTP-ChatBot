import type { Context } from "grammy";
import { formatCommandList } from "../config/commandList.js";
import { replyWithReply } from "../utils/contextUtilities.js";

export async function start(context: Context) {
  await replyWithReply(
    context,
    `Welcome to KTP ChatBot! \n${formatCommandList()}`
  );
}

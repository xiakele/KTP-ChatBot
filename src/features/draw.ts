import "dotenv/config";
import type { Context } from "grammy";
import {
  getCommandContent,
  replyWithReply,
} from "../utils/contextUtilities.ts";
import { getImageUrl } from "../utils/drawUtilities.ts";
import { FormattedString } from "@grammyjs/parse-mode";

//TODO: refactor draw function
export async function draw(context: Context) {
  const apiKey = process.env?.SILICONFLOW_APIKEY;
  const prompt = getCommandContent(context);
  if (!apiKey) {
    throw new Error("No API key provided!");
  } else if (!prompt) {
    await replyWithReply(context, "No prompt provided!");
    return;
  }
  const processingMessage = await replyWithReply(context, "Processing...");
  const imgUrl = await getImageUrl(prompt, apiKey);
  const formattedCaption = FormattedString.bold("prompt: ")
    .code(prompt)
    .bold("\nmodel: ")
    .plain("Kwai-Kolors/Kolors");
  await context.replyWithPhoto(imgUrl, {
    caption: formattedCaption.caption,
    caption_entities: formattedCaption.caption_entities,
  });
  if (processingMessage) {
    await context.api.deleteMessage(
      processingMessage.chat.id,
      processingMessage.message_id
    );
  }
}

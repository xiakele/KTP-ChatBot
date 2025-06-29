import type { BotCommand } from "grammy/types";

export const commandList: BotCommand[] = [
  { command: "echo", description: "Echoes back the message" },
  { command: "search", description: "Searches the web" },
  { command: "draw", description: "Generates an image with a given prompt" },
  { command: "help", description: "Displays the list of available commands" },
];

export function formatCommandList(): string {
  return commandList
    .map((cmd) => `/${cmd.command} - ${cmd.description}`)
    .join("\n");
}

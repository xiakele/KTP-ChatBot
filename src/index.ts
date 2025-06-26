import { createBot } from "./bot.js";
import { commandList } from "./config/commandList.js";
import { start } from "./features/start.js";
import { echo } from "./features/echo.js";
import { search } from "./features/search.js";
import { help } from "./features/help.js";
import { errorHandler } from "./utils/errorHandler.js";

const bot = createBot();

// Set bot commands
await bot.api.setMyCommands(commandList);

// Register commands
bot.command("start", start);
bot.command("echo", echo);
bot.command("search", search);
bot.command("help", help);

// eslint-disable-next-line unicorn/prefer-top-level-await
bot.catch(errorHandler);

bot.start();

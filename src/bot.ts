import "dotenv/config";
import { Bot } from "grammy";
import { ProxyAgent } from "proxy-agent";
import { EnvHttpProxyAgent, setGlobalDispatcher } from "undici";

export function createBot(options?: { customProxyAddr?: string }): Bot {
  if (!process.env.BOT_TOKEN) {
    throw new Error("BOT_TOKEN is not defined in the environment variables.");
  }
  if (options?.customProxyAddr) {
    process.env.HTTP_PROXY = options.customProxyAddr;
    process.env.HTTPS_PROXY = options.customProxyAddr;
  }
  setGlobalDispatcher(new EnvHttpProxyAgent());
  return new Bot(process.env.BOT_TOKEN, {
    client: {
      baseFetchConfig: {
        agent: new ProxyAgent(),
        compress: true,
      },
    },
  });
}

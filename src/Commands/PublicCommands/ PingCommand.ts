import { Chopper } from "../../Chopper";
import { Command } from "../../Structures/Command";
import {
  Message,
  MessageEmbed,
  ColorResolvable,
  CacheType,
  Interaction,
} from "discord.js";

export default class Avatar extends Command {
  constructor(client: Chopper) {
    super(client, {
      name: "ping",
    });
  }

  async run(client: Chopper, args: string[], message: Message) {
    message.channel.send("Pong!");
  }

  async runSlash(i: Interaction<CacheType>): Promise<void> {
    if (i.isCommand()) {
      i.reply("Ola");
    }
  }
}

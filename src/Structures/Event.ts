import { ClientEvents } from "discord.js";
import { Chopper } from "../Chopper";

export interface Event {
  name: keyof ClientEvents;
  client: Chopper;
}
interface EventOptions {
  name: keyof ClientEvents;
}
export class Event {
  constructor(client: Chopper, options: EventOptions) {
    this.name = options.name;
    this.client = client;
  }
  async run(...args: any[]): Promise<any> {}
}

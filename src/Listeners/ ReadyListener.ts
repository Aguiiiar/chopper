import { Event } from "../Structures/Event";
import { Chopper } from "../Chopper";

export default class ReadyListener extends Event {
  constructor(client: Chopper) {
    super(client, {
      name: "ready",
    });
  }

  async run() {
    console.log(`Logando o ${this.client.user.tag}`);
    this.client.registryCommands();
  }
}

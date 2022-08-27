import { readdir } from "fs";
import { Chopper } from "../Chopper";

export default class EventsLoader {
  constructor(client: Chopper) {
    readdir(
      `./${process.env.ENV == "PROD" ? "dist" : "src"}/Listeners`,
      (err, files) => {
        if (err) throw new Error("Events Loader Error: " + err);
        files.forEach((filename, info) => {
          const Listener = require(`../Listeners/${filename}`);
          const ListenerClass = Listener.default;
          delete require.cache[require.resolve(`../Listeners/${filename}`)];
          const listener = new ListenerClass(client);

          console.log(" | [ " + listener.name + " ] " + "Loaded with sucess");
          client.on(listener.name, (...args) => {
            listener.run(...args);
          });
        });
      }
    );
  }
}

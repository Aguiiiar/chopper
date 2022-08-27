import { Chopper } from "./Chopper";
require("dotenv").config();
const client = new Chopper({
  token: process.env.TOKEN,
});

client.start();

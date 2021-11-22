import { ColorConsole } from "./colorConsole.js";

export class BlueConsole extends ColorConsole {
  constructor() {
    super();
  }
  log() {
    console.log("BlueConsole");
  }
}

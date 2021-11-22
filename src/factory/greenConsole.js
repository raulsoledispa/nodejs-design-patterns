import { ColorConsole } from "./colorConsole.js";

export class GreenConsole extends ColorConsole {
  constructor() {
    super();
  }
  log() {
    console.log("GreenConsole");
  }
}

import { ColorConsole } from "./colorConsole.js";

export class RedConsole extends ColorConsole {
  constructor() {
    super();
  }

  log() {
    console.log("RedConsole...");
  }
}

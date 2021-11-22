import { BlueConsole } from "./blueConsole.js";
import { GreenConsole } from "./greenConsole.js";
import { RedConsole } from "./redConsole.js";

function consoleFactory(color) {
  if (color === "blue") {
    return new BlueConsole();
  } else if (color === "green") {
    return new GreenConsole();
  } else if (color === "red") {
    return new RedConsole();
  }
  
  throw new Error("Color type doesn't found");
}

export { consoleFactory };

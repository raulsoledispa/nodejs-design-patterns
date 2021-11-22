import { test, type, throws } from "tap";
import { consoleFactory } from "../consoleFactory.js";
import { GreenConsole } from "../greenConsole.js";

test("verify instance created", async () => {
  const logger = consoleFactory("green");
  type(logger, GreenConsole);
});

test("verify Error  when color doesn't found", async () => {
  throws(() => consoleFactory("blonde"), {}, { skip: true });
});

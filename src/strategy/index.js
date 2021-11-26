import { Logger } from "./logger.js";
import { consoleStrategy, fileStrategy } from "./strategies.js";

const loggerFile = new Logger(fileStrategy);
loggerFile.info("Message Info");

const loggerConsole = new Logger(consoleStrategy);
loggerConsole.info("Hello")
import { consoleFactory } from "./consoleFactory.js";
import { argv } from "process";
//console.log(argv[2])
const logger = consoleFactory("grace");

logger.log();
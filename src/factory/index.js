#!/usr/bin/env node
import { Command } from "commander";
import { consoleFactory } from "./consoleFactory.js";
import { argv } from "process";

const program = new Command().option(
  "-c, --color <name>",
  "color's name",
);
program.parse(argv);

const options = program.opts();
const logger = consoleFactory(options.color);
logger.log();

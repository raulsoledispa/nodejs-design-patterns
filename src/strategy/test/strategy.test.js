import { test, doesNotThrow } from "tap";
import { consoleStrategy } from "../consoleStrategy.js";
import { fileStrategy } from "../fileStrategy.js";

test("Verify console strategy", async () => {
    doesNotThrow(() => consoleStrategy.write("Test"))
});

test("Verify file strategy", async () => {
    doesNotThrow(() => fileStrategy.write("Test"))
});
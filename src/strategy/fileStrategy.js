import { writeFileSync } from "fs";
const fileStrategy = {
    write: msg => writeFileSync("./msg.log", msg)
}

export { fileStrategy }
import { test, type, end } from "tap";
import Builder from "../urlBuilder.js";
test("verify builder", async () => {
  const url = new Builder()
    .setProtocol("https")
    .setHost("12.0.0.1")
    .setPort(8080)
    .setPath("/api/v1/resources")
    .build();

  type(url.toString(), "string");
});

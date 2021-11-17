import Builder from "./urlBuilder.js";

const url = new Builder()
  .setProtocol("https")
  .setHost("12.0.0.1")
  .setPort(8080)
  .setPath("/api/v1/resources")
  .setQuery("query=abc")
  .build();

console.log(url.toString());

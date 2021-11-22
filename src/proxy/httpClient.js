import { request } from "undici";
import { Cache } from "./cache.js";

const consume = async (url) => {
  console.log("consume");
  const { body } = await request(url, {
    method: "GET",
  });

  return body.json();
};

const httpClient = new Proxy(consume, Cache);

export { httpClient };

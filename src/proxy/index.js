import { httpClient } from "./httpClient.js";


for (let i = 0; i < 3; i++) {
  const response = await httpClient("https://rickandmortyapi.com/api");
  console.log(response)
}

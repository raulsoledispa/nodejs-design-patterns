import { httpClient } from "./httpClient.js";

/*console.log(httpClient("https://rickandmortyapi.com/api"));*/

/*httpClient*/
httpClient("https://rickandmortyapi.com/api")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

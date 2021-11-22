const map = new Map();



const Cache = {
  apply: function (target, props, argumentsList) {
    console.log(argumentsList[0]);
    console.log(map.keys())
    const cache = map.get(argumentsList[0]);
    console.log(cache)
  
    if (!cache) {
     console.log("fetching data...")
      const data = target(argumentsList[0]);
      map.set(argumentsList[0], data);
      return data;
    }

    console.log(" data cached...")
    return cache;
  },
};

export { Cache };

const map = new Map();



const Cache = {
  apply: function (target, props, argumentsList) {
    const cache = map.get(argumentsList[0]);

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

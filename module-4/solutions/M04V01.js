// Problem Statement

// Implement a simple in-memory cache for an "expensive" function (like a database query or API call).
// The goal is to store the results of a function call so that if the same call is made again,
// the result is returned from the cache instead of running the expensive function.

const cacheData = new Map();

const getUserData = (userId) => {
  return {
    userName: `User is ${userId}`,
    time: new Date().getTime()
  };
};

const getData = (userId) => {
    if (cacheData.has(userId)) {
      console.log("Cache hit ");
      return cacheData.get(userId);
    }

  const userData = getUserData(userId);
  cacheData.set(userId, userData);
  console.log("Cache miss");
  return userData;
};

getData(1);
getData(2);
console.log(cacheData);
getData(2);
getData(1);

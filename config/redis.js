const { createClient } = require("redis");

const redisClient = createClient({
  url: "redis://localhost:6379", // Replace with your Redis server URL
});

redisClient.on("error", (err) => {
  console.error("Redis connection error:", err);
});

(async () => {
  try {
    await redisClient.connect();
    console.log("Connected to Redis");
  } catch (err) {
    console.error("Redis connection failed:", err);
  }
})();

module.exports = redisClient;
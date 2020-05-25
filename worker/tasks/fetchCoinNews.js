var axios = require("../apiconf/crypto");
const redis = require("redis");
const { promisify } = require("util");

// redis client configuration
let client = null;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  client = redis.createClient({
    host: "127.0.0.1",
    no_ready_check: true,
    auth_pass: "root123",
  });
} else {
  client = redis.createClient(process.env.REDIS_URL);
}

const setAsync = promisify(client.set).bind(client);

module.exports = async function fetchCoinNews() {
  console.log("FETCHCOINNEWS");
  const newsData = await axios.get("/data/v2/news/?lang=EN");
  const success = await setAsync(
    "ALL_NEWS",
    JSON.stringify(newsData.data.Data)
  );
  console.log(success);
};

module.exports();

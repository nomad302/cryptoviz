var axios = require("../../apiconf/crypto");
const redis = require("redis");
const { promisify } = require("util");

// redis client configuration
const client = redis.createClient({
  host: "127.0.0.1",
  no_ready_check: true,
  auth_pass: "root123",
});

const setAsync = promisify(client.set).bind(client);

module.exports = async function fetchCoinNews() {
  console.log("FETCHCOINNEWS");
  const newsData = await axios.get("/data/v2/news/?lang=EN");
  console.log(newsData.data);
  const success = await setAsync(
    "ALL_NEWS",
    JSON.stringify(newsData.data.Data)
  );
  console.log(success);
};

module.exports();

const axios = require("../../config/crypto");
const { promisify } = require("util");
const client = require("../../config/redisClient")();
const setAsync = promisify(client.set).bind(client);

module.exports = async function fetchCoinNews() {
  const newsData = await axios.get("/data/v2/news/?lang=EN");
  await setAsync("ALL_NEWS", JSON.stringify(newsData.data.Data));
};

module.exports();

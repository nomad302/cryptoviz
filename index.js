const express = require("express");
const app = express();
const redis = require("redis");
const { promisify } = require("util");

// start worker
require("./worker")();

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

const getAsync = promisify(client.get).bind(client);

app.get("/coins", async (req, res) => {
  const coins = await getAsync("allCoins");
  res.header("Access-Control-Allow-Origin", "*");
  return res.send(JSON.parse(coins));
});

app.get("/historical/:coin", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const histData = await getAsync(req.params.coin);

  return res.send(JSON.parse(histData));
});

app.get("/news", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const newsData = await getAsync(`ALL_NEWS`);
  return res.send(JSON.parse(newsData));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);

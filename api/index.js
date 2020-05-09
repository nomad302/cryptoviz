const express = require("express");
const app = express();
const redis = require("redis");
const { promisify } = require("util");

// redis client configuration
const client = redis.createClient({
  host: "127.0.0.1",
  no_ready_check: true,
  auth_pass: "root123",
});

const getAsync = promisify(client.get).bind(client);

app.get("/coins", async (req, res) => {
  const coins = await getAsync("allCoins");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  return res.send(JSON.parse(coins));
});

app.listen(4000);

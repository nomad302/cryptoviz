const express = require("express");
const app = express();
const redis = require("redis");
const { promisify } = require("util");
const axios = require("../apiconf/crypto");

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

app.get("/historical/:coin", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");

  const histData = await getAsync(req.params.coin);

  return res.send(JSON.parse(histData));
});

app.get("/news", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  const newsData = await getAsync(`ALL_NEWS`);
  return res.send(JSON.parse(newsData));
});

app.listen(4000);

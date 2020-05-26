const express = require("express");
const { promisify } = require("util");
const client = require("./config/redisClient")();
const app = express();
const getAsync = promisify(client.get).bind(client);

// start worker
require("./worker")();

// Routes
require("./routes/coinsRoutes")(app, getAsync);
require("./routes/historicalDataRoutes")(app, getAsync);
require("./routes/newsRoutes")(app, getAsync);

// serving index.html
if (process.env.NODE_ENV === "production") {
  // express will serve up production assets
  // like main.js file or main.css file
  app.use(express.static("client/build"));
  // express will serve up the index.html file
  // if it doesnt recognise the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT);

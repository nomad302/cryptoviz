const redis = require("redis");

module.exports = () => {
  if (process.env.NODE_ENV === "production") {
    return (client = redis.createClient(process.env.REDIS_URL));
  }
  return (client = redis.createClient({
    host: "127.0.0.1",
    no_ready_check: true,
    auth_pass: "root123",
  }));
};

module.exports();

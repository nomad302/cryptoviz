module.exports = () => {
  var CronJob = require("cron").CronJob;
  var fetchCoins = require("./tasks/fetchCoins");
  var fetchHistorical = require("./tasks/fetchHistorical");
  var fetchCoinNews = require("./tasks/fetchCoinNews");

  var fetchCoinsJob = new CronJob(
    "0 0 */1 * * *",
    fetchCoins,
    null,
    true,
    "America/Los_Angeles"
  );

  var fetchHistoricalJob = new CronJob(
    "0 0 */1 * * *",
    fetchHistorical,
    null,
    true,
    "America/Los_Angeles"
  );

  var fetchCoinNewsJob = new CronJob(
    "0 0 */1 * * *",
    fetchCoinNews,
    null,
    true,
    "America/Los_Angeles"
  );

  // initiate the cron job
  fetchCoinsJob.start();
  fetchHistoricalJob.start();
  fetchCoinNewsJob.start();
};

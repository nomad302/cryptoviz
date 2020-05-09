var CronJob = require("cron").CronJob;
var fetchCoins = require("./tasks/fetchCoins");

var fetchCoinsJob = new CronJob(
  "0 0 */1 * * *",
  fetchCoins,
  null,
  true,
  "America/Los_Angeles"
);

// initiate the cron job
fetchCoinsJob.start();

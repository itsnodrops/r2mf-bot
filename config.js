module.exports = {
  // Set to true to enable the faucet claim process.
  FAUCET_ENABLE: true,

  // The target trading volume (buy and sell) to reach during the swap cycle.
  SWAP_VOLUME: 40000,

  // Set to true to enable the bot to run in a continuous loop.
  // After completing all accounts, it will pause until RESET_TIME.
  CYCLE_RESET: true,

  // The time (in 24-hour format, local machine time) to start the next cycle.
  // Example: "01:00" will start the next cycle at 1 AM.
  // Will be igrone if CYCLE_RESET set to false
  RESET_TIME: "01:00",

  // Set to true to enable the initial countdown when the bot starts.
  // Recommended if CYCLE_RESET is enabled.
  INITIAL_DELAY: true,
};
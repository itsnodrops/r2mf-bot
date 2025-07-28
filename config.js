const { SEPOLIA, MONAD, PHAROS } = require('./src/core/networks');

module.exports = {
  /**
   * An array of network configurations the bot will cycle through.
   * The bot will process all accounts on the first network, then move to the next.
   * Example: [SEPOLIA, MONAD] will run on Sepolia first, then Monad.
   */
  ACTIVE_NETWORKS: [SEPOLIA, MONAD, PHAROS],

  // Set to true to enable the faucet claim process.
  FAUCET_ENABLE: true,

  // The target trading volume (buy and sell) to reach during the swap cycle.
  SWAP_VOLUME: 40000, // Only for Sepolia network.

  // After completing all networks, it will pause until RESET_TIME.
  CYCLE_RESET: false, // Set to CYCLE_RESET: true, to enable the bot to run in a continuous loop (especially if you run it on a VPS).

  // The time (in 24-hour format) to start the next cycle.
  // Ignored if CYCLE_RESET: false,
  RESET_TIME: "01:00",

  // Set to true to enable an initial startup delay.
  INITIAL_DELAY: true,
};

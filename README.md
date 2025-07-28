# R2MF Bot by NoDrops 🤖✨

Welcome to the **R2MF Bot**! This is a powerful automation tool designed to interact with the [R2.Money Final Testnet phase](https://www.r2.money/?code=PWNLN). It handles everything from claiming faucet tokens to executing complex DeFi operations like swapping, staking, and providing liquidity, all through a sleek and informative command-line dashboard.

-----

### 🚀 Features

This bot is packed with features to make your participation in the R2.Money testnet as smooth and efficient as possible:

  * **⛓️ Seamless Multi-Chain Support**: The bot is designed from the ground up to operate across multiple EVM networks (Sepolia, Monad, Pharos). It automatically cycles through each configured network, applying the correct, chain-specific logic for every task.
  * **💧 Multi-Network Faucet Claiming**: Automatically claims testnet tokens from the Discord faucet for all your accounts across all supported networks, while respecting individual cooldown periods.
  * **🔄 Smart Swap Cycles**: Executes token swaps with the specific goal of building trading volume. The bot intelligently cycles through different token pairs until the target volume in `config.js` is met.
  * **💰 Automated Staking**: Maximizes your protocol engagement by automatically staking available wBTC and R2USD tokens where appropriate.
  * **🌊 Intelligent Liquidity Provisioning**: Goes beyond simply adding liquidity. The bot first calculates the optimal token ratio to prevent failed transactions, stakes one asset to balance the pool, and then provides liquidity with the remaining assets.
  * **🛡️ Slippage Protection**: Protects your swaps and liquidity provisions from price volatility by allowing you to set a custom slippage tolerance (e.g., 0.1%) in the configuration.
  * **💪 Robust Error Handling & Retries**: Built to be resilient. If a transaction fails or a network RPC times out, the bot will automatically retry the action, re-checking on-chain data to ensure it doesn't repeat already successful transactions.
  * **👥 Multi-Account Support**: Manage and run tasks for an unlimited number of accounts seamlessly.
  * **📊 Comprehensive Real-Time Dashboard**: A user-friendly and detailed command-line interface to monitor the status, balances, points, and live action logs for each account.
  * **⚙️ Fully Configurable**: Easily configure target swap volume, cycle resets, initial delays, slippage, and enable/disable features like the faucet claim through the `config.js` file.

-----

### 🤔 How It Works?

The bot operates in a continuous, configurable cycle. Here’s a high-level overview of a single run:

1.  **Initialization**: The bot starts, and if enabled, waits for a calculated initial delay.
2.  **Faucet Phase**: If enabled, it iterates through all your configured accounts and sends a request to the Discord faucet to claim tokens on each network.
3.  **Transaction Phase**: For each account, the bot performs the following sequence of operations:
      * Logs into the R2.Money platform by signing a message.
      * Stakes any available wBTC balance.
      * Executes a swap cycle until the target volume defined in `config.js` is reached.
      * Consolidates various assets back into R2USD.
      * Optimizes and provides liquidity to the sR2USD/R2USD pool.
4.  **Cycle Reset**: Once all accounts are processed, the bot displays a final summary. If `CYCLE_RESET` is enabled, it will calculate the time until the next run (defined by `RESET_TIME`) and begin a countdown.

-----

### 📋 Requirements

Before you begin, ensure you have the following installed on your system:

  * **[Node.js](https://nodejs.org/)**: Version 14.x or higher.
  * **[npm](https://www.npmjs.com/)**: Usually comes with Node.js.

-----

### 📁 Project Structure

The project is organized into a modular structure for clarity and maintainability. Understanding this structure can help you customize the bot if needed.

```
r2mf-bot/
├── src/
│   ├── core/
│   │   ├── abi.js         # Contains all necessary contract Application Binary Interfaces (ABIs).
│   │   ├── api.js         # Handles communication with the R2.Money backend API.
│   │   └── networks.js    # Stores network-specific details like RPCs and contract addresses.
│   ├── services/
│   │   ├── faucet.js      # Logic for claiming from the Discord faucet and managing sessions.
│   │   ├── helper.js      # Utility functions for approvals, balance checks, and robust tx sending.
│   │   ├── lp.js          # Logic for providing and balancing liquidity.
│   │   ├── stake.js       # Implements the staking logic for various assets.
│   │   └── swap.js        # Manages all token swapping operations and volume building.
│   ├── utils/
│   │   ├── dashboard.js   # Renders the dynamic command-line interface.
│   │   └── sessions.json  # Caches Discord session data to speed up faucet claims.
│   └── index.js           # Contains the high-level process flow for each network type.
├── app.js                 # Main entry point that orchestrates the bot's high-level phases.
├── config.js              # Central user-facing configuration file.
├── package.json           # Project dependencies and scripts.
├── .env.example           # Example file for environment variables.
└── README.md              # You are here!
```

-----

### ⚠️ Security Warning

**Your private keys are your responsibility.** This script requires you to input your private keys into the `.env` file to function.

  * **NEVER** share your `.env` file or your private keys with anyone.
  * Review the code to understand how your keys are used. They are only used for signing and sending transactions on your behalf.
  * It is recommended to use "burner" wallets that are funded only with the necessary assets for this testnet.

-----

### ⚖️ Disclaimer

The author is not responsible for any financial loss, security breach, or any other accident that may occur from using this software. Use it at your own risk.

-----

### ❓ Source Code

The source code provided in the distribution may be obfuscated. This is a deliberate measure **to prevent scripts from being SOLD by individuals (like creating VIP services and such)**, as this tool is **intended to be free for the community**. A clean, non-obfuscated version will be shared publicly at a later date. In the meantime, you are encouraged to review the code yourself. You can de-obfuscate it or ask an AI assistant like **Google's Gemini** or **ChatGPT** to analyze the code for you to verify its safety and functionality.

-----

### 📣 Join Our Community!

Have questions, need support, or just want to hang out with other airdrop hunters?

  * **Join our Telegram Channel**: [**NoDrops**](https://t.me/NoDrops)

-----

### ▶️ How to Run?

A complete, step-by-step tutorial on how to set up and run this bot is available on the [**NoDrops**](https://t.me/NoDrops) Telegram channel. Please refer to it for detailed instructions.

-----

### ❤️ Donate for Support

If you find this tool helpful and want to support its development and the creation of more tools like this, please consider donating. Your support is greatly appreciated!

  * **EVM Address**: `0xfD1847bFAA92fb8c0d100b207d377490C5acd34c`
  * **SOL Address**: `BBZjp11sJNvekXZEBhhYDro9gsyyhEKXXcfEEub5ubje`
  * **TON Address**: `UQDoLQNF-nt9CFOHBs9mQqxH9YJKrZ6mFPbAeHH8Jo9xIGCb`

-----

### 📄 License

This project is licensed under the [**MIT License**](https://github.com/itsnodrops/r2mf-bot/blob/main/LICENSE). See the `LICENSE` file for details.

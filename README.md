# R2MF Bot by NoDrops 🤖✨

Welcome to the **R2MF Bot**\! This is a powerful automation tool designed to interact with the [R2.Money Final Testnet phase](https://www.r2.money/?code=PWNLN). It handles everything from claiming faucet tokens to executing complex DeFi operations like swapping, staking, and providing liquidity, all through a sleek and informative command-line dashboard.

-----

### 🚀 Features

This bot is packed with features to make your participation in the R2.Money testnet as smooth as possible:

  * **💧 Automated Faucet Claiming**: Automatically claims testnet tokens from the Discord faucet for all your accounts, respecting cooldown periods.
  * **🔄 Smart Swap Cycles**: Executes token swaps to meet a target trading volume, intelligently cycling through different token pairs.
  * **💰 Automated Staking**: Stakes your wBTC and R2USD tokens to maximize your engagement in the protocol.
  * **🌊 Liquidity Provisioning**: Intelligently balances your assets and adds them to the liquidity pool.
  * **👥 Multi-Account Support**: Manage and run tasks for multiple accounts seamlessly.
  * **📊 Comprehensive Dashboard**: A user-friendly and detailed command-line interface to monitor the status, balances, points, and logs for each account in real-time.
  * **⚙️ Fully Configurable**: Easily configure target swap volume, cycle resets, initial delays, and enable/disable features like the faucet claim through the `config.js` file.

-----

### 🤔 How It Works?

The bot operates in a continuous, configurable cycle. Here’s a high-level overview of a single run:

1.  **Initialization**: The bot starts, and if enabled, waits for a calculated initial delay.
2.  **Faucet Phase**: If enabled, it iterates through all your configured accounts and sends a request to the Discord faucet to claim tokens.
3.  **Transaction Phase**: For each account, the bot performs the following sequence of operations:
      * Logs into the R2.Money platform by signing a message.
      * Stakes any available wBTC balance.
      * Executes a swap cycle until the target volume defined in `config.js` is reached.
      * Consolidates various assets back into R2USD for liquidity.
      * Optimizes and provides liquidity to the sR2USD/R2USD pool.
4.  **Cycle Reset**: Once all accounts are processed, the bot displays a final summary. If `CYCLE_RESET` is enabled, it will calculate the time until the next run (defined by `RESET_TIME`) and begin a countdown.

-----

### 📋 Requirements

Before you begin, ensure you have the following installed on your system:

  * **[Node.js](https://nodejs.org/)**: Version 14.x or higher.
  * **[npm](https://www.npmjs.com/)**: Usually comes with Node.js.

-----

### 📁 Project Structure

The project is organized into a modular structure for clarity and maintainability.

```
r2mf-bot/
├── src/
│   ├── core/
│   │   ├── abi.js         # Contains all necessary contract ABIs
│   │   ├── api.js         # Handles all API interactions with R2.Money
│   │   └── contracts.js   # Stores contract addresses and network info
│   ├── services/
│   │   ├── faucet.js      # Logic for claiming from the Discord faucet
│   │   ├── helper.js      # Helper functions (e.g., balance checks, approvals)
│   │   ├── lp.js          # Logic for adding liquidity
│   │   ├── stake.js       # Staking logic for wBTC and R2USD
│   │   └── swap.js        # Logic for executing token swaps
│   └── utils/
│       ├── dashboard.js   # Manages the CLI dashboard display
│       └── sessions.json  # Caches Discord session IDs
├── app.js                 # Main entry point of the application
├── config.js              # User-facing configuration file
├── package.json           # Project dependencies and scripts
├── .env.example           # Example file for environment variables (Private Keys & Discord Token)
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

### 🤝 Contribution

Feel free to open pull requests, report bugs, or suggest features. Contributions are always welcome! \

-----

### ❓ Source Code

The source code provided in the distribution is obfuscated. A clean version will be shared publicly at a later date. In the meantime, you are encouraged to review the code yourself. You can de-obfuscate it or ask an AI assistant like **Google's Gemini** or **ChatGPT** to analyze the code for you to verify its safety and functionality.

-----

### 📣 Join Our Community\!

Have questions, need support, or just want to hang out with other airdrop hunters?

  * **Join our Telegram Channel**: [**NoDrops**](https://t.me/NoDrops)

-----

### ▶️ How to Run?

A complete, step-by-step tutorial on how to set up and run this bot is available on the [**NoDrops**](https://t.me/NoDrops) Telegram channel. Please refer to it for detailed instructions.

-----

### ❤️ Donate for Support

If you find this tool helpful and want to support its development and the creation of more tools like this, please consider donating. Your support is greatly appreciated\!

* **TON**: `UQDoLQNF-nt9CFOHBs9mQqxH9YJKrZ6mFPbAeHH8Jo9xIGCb`
* **EVM**: `0xfD1847bFAA92fb8c0d100b207d377490C5acd34c`
* **SOL**: `BBZjp11sJNvekXZEBhhYDro9gsyyhEKXXcfEEub5ubje`

-----

### 📄 License

This project is licensed under the [**MIT License**](https://github.com/itsnodrops/r2mf-bot/blob/main/LICENSE). See the `LICENSE` file for details.
# 🔥 R2 Money Final Testnet Bot 🔥

Welcome to the **R2 Money Final Testnet Bot**! \
This is a powerful automation tool designed to interact with the [R2 Money Final Testnet](https://www.r2.money/?code=PWNLN). This bot helps you automate various tasks across multiple accounts, maximizing your potential engagement with the protocol.


---

## ✨ Core Features

This bot comes packed with features to automate your entire workflow:

-   **💧 Auto Faucet Claim:** Automatically claims testnet tokens from the Discord faucet for all your accounts, respecting cooldown periods.
-   **📈 Auto WBTC Staking:** Stakes your entire wBTC balance to generate yield.
-   **🔄 Smart Swap Cycle:** Executes a strategic swap routine (USDC -> R2 -> R2USD -> R2 -> USDC) to efficiently build up your trading volume.
-   **💰 Asset Consolidation:** After the swap cycle, it intelligently consolidates all your assets into R2USD.
-   **⚖️ Dynamic Liquidity Provision:** Calculates the optimal ratio and automatically stakes a portion of R2USD to sR2USD before adding liquidity to the pool.
-   **🤝 Auto Referral Binding:** Automatically binds your referral code if it hasn't been done already.
-   **🖥️ Real-time Dashboard:** A clean and comprehensive terminal dashboard to monitor the status, balances, points, and logs for all your accounts in real-time.
-   **🔄 Continuous Cycle Mode:** Optionally, the bot can run in a continuous loop, resetting at a specified time each day to perform the tasks all over again.

---

## 📂 Project Structure

The project is organized to be clean and maintainable. Here's a look at the key files and directories:

```

r2m-final-bot/
├── app.js               \# Main entry point of the application
├── config.js            \# Main configuration (swap volume, cycle reset)
├── .env.example         \# Example file for environment variables (Private Keys & Discord Token)
├── package.json         \# Project dependencies and scripts
└── src/
    ├── core/            \# Core modules for interacting with the blockchain
    │   ├── abi.js       \# Contract ABIs
    │   ├── api.js       \# Functions for R2.money API
    │   └── contracts.js \# Contract addresses and network details
    ├── services/        \# Business logic for each automated task
    │   ├── faucet.js    \# Logic for Discord faucet claims
    │   ├── helper.js    \# Helper functions (balance checks, approvals)
    │   ├── lp.js        \# Logic for adding liquidity
    │   ├── stake.js     \# Staking logic for wBTC and R2USD
    │   └── swap.js      \# Swap cycle and asset consolidation logic
    └── utils/           \# Utility modules
        ├── dashboard.js \# The interactive terminal dashboard UI
        └── sessions.json\# Caches Discord session IDs to speed up faucet claims

```

---

## 🚀 Get Started

A complete, step-by-step tutorial on how to configure and run the bot will be available exclusively on NoDrops Telegram channel.

**Join now to not miss out! \
👉 [NoDrops Telegram](https://t.me/NoDrops)**

---

## ⚠️ Disclaimer

This project is provided for educational and informational purposes only. The author is not responsible for any financial loss, account restrictions, or any other negative incidents that may occur from using this bot. You are solely responsible for your actions and for complying with the terms of service of any platform you interact with using this tool.

**Use at your own risk.**

# Compound demo

This demo provides a minimal setup to get started with a Compound lending interaction using the OKcontract permissionless SDK.

You are welcome to fork this repo to get started!

# Getting started

Install dependencies, build and run the app:

```sh
npm i
npm run build
npm run preview
```

# How it works

## Contract Interactions

You can create interactions on the [app.okcontract.com](https://app.okcontract.com) hub. Or you can use an existing interaction to start with.

The OKcontract Interactions Hub is a place where developers can easily view smart contracts ABIs, choose methods and set parameters of their interactions.

In this template, we are using Uniswap v3 router smart contract interaction to swap ETH to USDC on Sepolia testnet.

## InteractionID

The Compound USDC Lending `interactionID` is defined in main.tsx file:

```tsx
const interactionID = "QOmvyY302kRJNSgyRrvW";
```

# Philosophy

The idea behind the OKcontract SDK is to operate a permissionless SDK that doesn't require an API key, making it much easier for developers to kickstart smart contract development.

# QR Code Payment System

This project is a QR code payment system that allows users to generate QR codes for payment amounts and receive payments by scanning the QR codes. The system integrates with MetaMask to connect users' wallets and handle transactions.

## Features

- Generate QR codes for payment amounts.
- Display the amount to be received and an input field for the wallet address upon scanning the QR code.
- Connect to MetaMask to get the user's wallet address.
- Handle payment transactions using a smart contract.

## Technologies Used

- React & Typescript
- Tailwind CSS
- Wagmi
- Vite
- Arbitrum SDK
- Thirdweb ConnectButtonSDK

## Getting Started

### Prerequisites

- Node.js and npm installed
- MetaMask extension installed in your browser

### Installation

1. Clone the repository:

   ```bash
   ghttps://github.com/Ileolami/QR-code-payment
   cd QR-code-payment
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the browser and navigate to <http://localhost:5173/> to view the app.

## Usage

1. Enter the amount you want to send in the input field and click "Generate" to create a QR code.

2. Validate the transaction.

3. Your receiver scans the QR code.

> Note: It is recommended for your receiver to carry this action on their wallet browser and have some faucet in their account.

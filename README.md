# QR Pay - Simplifying Crypto Payments with QR Codes

This project is a QR code payment system that allows users to generate QR codes for sendingQR Pay is a decentralized payment solution that allows users to send and receive cryptocurrency effortlessly using QR codes. Our platform simplifies the payment process by generating a QR code for any amount specified by the user. When scanned, the QR code directs the payer to a payment page where they can enter their wallet address and complete the transaction. amounts and receive payments by scanning the QR codes. The system integrates with MetaMask to connect users' wallets and handle transactions.

## Features

- Generate QR codes for payment amounts.
- Display the amount to be received and the destination address upon scanning the QR code.
- Connect to MetaMask to get receive the funds.
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

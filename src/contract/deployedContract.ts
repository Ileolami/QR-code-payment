export const deployedContract = {
    address: "0x3D10A21cCfEE3d970a49d09b0562A7502c251991",
    abi: [
        {
         "inputs": [],
         "name": "PaymentProcessor__PaymentNotSent",
         "type": "error"
        },
        {
         "anonymous": false,
         "inputs": [
          {
           "indexed": true,
           "internalType": "uint256",
           "name": "paymentCount",
           "type": "uint256"
          },
          {
           "indexed": true,
           "internalType": "address",
           "name": "sender",
           "type": "address"
          },
          {
           "indexed": false,
           "internalType": "uint256",
           "name": "amount",
           "type": "uint256"
          }
         ],
         "name": "PaymentSent",
         "type": "event"
        },
        {
         "inputs": [],
         "name": "sendPayment",
         "outputs": [],
         "stateMutability": "payable",
         "type": "function"
        },
        {
         "stateMutability": "payable",
         "type": "fallback"
        },
        {
         "inputs": [
          {
           "internalType": "address",
           "name": "_sender",
           "type": "address"
          }
         ],
         "name": "withdraw",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
        },
        {
         "stateMutability": "payable",
         "type": "receive"
        },
        {
         "inputs": [
          {
           "internalType": "address",
           "name": "",
           "type": "address"
          }
         ],
         "name": "payments",
         "outputs": [
          {
           "internalType": "uint256",
           "name": "amount",
           "type": "uint256"
          }
         ],
         "stateMutability": "view",
         "type": "function"
        },
        {
         "inputs": [],
         "name": "paymentsCount",
         "outputs": [
          {
           "internalType": "uint256",
           "name": "",
           "type": "uint256"
          }
         ],
         "stateMutability": "view",
         "type": "function"
        }
       ],
}
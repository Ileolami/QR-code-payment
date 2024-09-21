// import { getArbitrumNetwork, EthBridger } from '@arbitrum/sdk'
// import Web3, { eth, utils } from 'web3';

// // get the `@arbitrum/sdk` ArbitrumNetwork object using the chain id of the Arbitrum One chain
// const childNetwork = await getArbitrumNetwork(42161)
// const ethBridger = new EthBridger(childNetwork)

// const ethDepositTxResponse = await ethBridger.deposit({
//   amount: utils.parseEther('23'),
//   parentSigner, // an ethers v5 signer connected to mainnet ethereum
//   childProvider, // an ethers v5 provider connected to Arbitrum One
// })

// const ethDepositTxReceipt = await ethDepositTxResponse.wait()
// console.log(ethDepositTxReceipt)
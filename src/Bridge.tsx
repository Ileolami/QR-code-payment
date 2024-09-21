import { getArbitrumNetwork, EthBridger } from '@arbitrum/sdk';
import { ethers } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';

// Set up providers and signers (replace with your actual providers/signers)
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/'+ import.meta.env.VITE_INFURA_KEY as string);
const parentSigner = new ethers.Wallet(import.meta.env.VITE_WALLET_PRIVATE_KEY, provider); // Note: use VITE_ prefix for Vite environment variables

// Get the Arbitrum network object using the chain ID for Arbitrum One
const bridger = async () => {
    // Obtain the Arbitrum network object
    const childNetwork = getArbitrumNetwork(42161);
    const ethBridger = new EthBridger(childNetwork);

    // Perform the deposit
    const ethDepositTxResponse = await ethBridger.deposit({
        amount: parseUnits('23', 'ether'), // Convert 23 ETH to Wei
        parentSigner, // The signer connected to mainnet Ethereum
    });

    return await ethDepositTxResponse.wait();
};

// Execute the bridging function
bridger().then(console.log).catch(console.error);

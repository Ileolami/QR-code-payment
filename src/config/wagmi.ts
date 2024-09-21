import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, arbitrumSepolia, arbitrum     } from 'wagmi/chains'

export const wagmi = createConfig({
  chains: [mainnet, sepolia, arbitrumSepolia, arbitrum],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [arbitrumSepolia.id]: http(),
    [arbitrum.id]: http(),
  },
})
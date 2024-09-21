import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThirdwebProvider } from "thirdweb/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { wagmi } from './config/wagmi.ts';

const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ThirdwebProvider>
     <WagmiProvider config={wagmi}>
     <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
      </WagmiProvider>
    </ThirdwebProvider>
  </StrictMode>
)

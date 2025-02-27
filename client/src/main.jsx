import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  rainbowWallet,
} from "@thirdweb-dev/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider>
  <ThirdwebProvider
      activeChain="mumbai"
      clientId="YOUR_CLIENT_ID"
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
        coinbaseWallet(),
        rainbowWallet(),
      ]}
    >
    <App />
    <ToastContainer/>
  </ThirdwebProvider>
  </ChakraProvider>
  </React.StrictMode>
)

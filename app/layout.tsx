'use client';

import { configureChains } from "wagmi";
import { polygon } from '@wagmi/core/chains'
import { alchemyProvider } from '@wagmi/core/providers/alchemy'
import { publicProvider } from '@wagmi/core/providers/public'
import '@styles/global.css';
import StyledComponentsRegistry from '@theme/registry';
import { WagmiConfig, createClient } from 'wagmi';
import { Provider } from 'react-redux';
import { store } from '@state/state';
import { EthereumClient, w3mConnectors } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { useEffect } from "react";

const { chains, provider } = configureChains(
  [ polygon],
  [ alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_POLYGON_API_KEY! }), publicProvider() ],
)      

const client = createClient({
  autoConnect: false,
  connectors: w3mConnectors({ projectId: process.env.NEXT_PUBLIC_WALLECTCONNECT_PROJECT_ID!, version: 1, chains }),
  provider
});

const ethereumClient = new EthereumClient(client, chains)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    client.autoConnect();
  }, [])

  return (
    <html lang="en">
       <head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Auditor board</title>
      </head>
      <body>
        <Provider store={store}>
        <StyledComponentsRegistry><WagmiConfig client={client}>{children}</WagmiConfig></StyledComponentsRegistry>
        </Provider>
        <Web3Modal projectId={process.env.NEXT_PUBLIC_WALLECTCONNECT_PROJECT_ID!} ethereumClient={ethereumClient} />
      </body>
    </html>
  )
}

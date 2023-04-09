'use client';

import '@styles/global.css';
import StyledComponentsRegistry from '@theme/registry';
import { getDefaultProvider, providers } from 'ethers';
import { WagmiConfig, createClient } from 'wagmi';
import { Provider } from 'react-redux';
import { store } from '@state/state';

export const provider = new providers.JsonRpcProvider('https://polygon-mainnet.g.alchemy.com/v2/jGtKje8PmSzYD1f4DgXoS3FSp_cxbzR7');
export const matic = {
  name: 'matic',
  chainId: 137,
  _defaultProvider: (providers: any) => provider
}

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(matic),
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        <title>Auditor board</title>
      </head>
      <body><Provider store={store}>
        <StyledComponentsRegistry><WagmiConfig client={client}></WagmiConfig>{children}</StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  )
}

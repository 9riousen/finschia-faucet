"use client";

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { ChainProvider } from '@cosmos-kit/react'
import { AssetList, Chain } from '@chain-registry/types'
import { wallets } from '@cosmos-kit/keplr'
import '@interchain-ui/react/styles'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'TFNSA 수도꼭지(Ebony faucet)',
  description: '김택배',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const ebonyChain: Chain = {
    chain_id: 'ebony-2',
    chain_name: 'ebony',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'Finschia Testnet',
    bech32_prefix: 'tlink',
    slip44: 438
  };

  const ebonyAssetList: AssetList = {
    chain_name: 'ebony',
    assets: [
      {
        denom_units: [
          {
            denom: 'tcony',
            exponent: 0
          },
          {
            denom: 'tfnsa',
            exponent: 6
          }
        ],
        base: 'tcony',
        name: 'Test FNSA',
        display: 'tfnsa',
        symbol: 'TFNSA',
        logo_URIs: {
          png: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4512.png'
        },
        coingecko_id: 'link'
      }
    ]
  }

  
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ChainProvider
          chains={[ebonyChain]}
          assetLists={[ebonyAssetList]}
          wallets={wallets}
          >
          {children}
        </ChainProvider>
        <Toaster />
      </body>
    </html>
  )
}

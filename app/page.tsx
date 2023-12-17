'use client';

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast';
import Image from 'next/image'
import { useState } from 'react'

export const URL_FAUCET = 'https://faucet-ebonynw.line-apps.com/credit'

const isValidAddress = (addr: string) => /^tlink1/.test(addr)

export default function Home() {
  const [addr, setAddr] = useState('');
  const { toast } = useToast();

  async function handleFaucetRequest() {
    console.log('handleFaucetRequest', isValidAddress(addr));
    const resp = await fetch(URL_FAUCET, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          denom: "tcony",
          address: addr
        })
      });
      const respText = await resp.text();
      toast({
        title: resp.ok ? "성공" : "실패",
        description: resp.ok ? `+10TFNSA ${addr}` : respText,
        variant: resp.ok ? null : 'destructive'
      });
  }

  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
      <Card className='w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-gray-800'>
        <CardContent className='p-6'>
          <div className='flex items-center'>
            <Image
              src='https://s2.coinmarketcap.com/static/img/coins/200x200/4512.png'
              width={48}
              height={48}
              alt='logo'/>
            <h2 className='ml-6 text-2xl font-semibold text-gray-900 dark:text-white'>핀시아 테스트넷 수도꼭지</h2>
          </div>
          <p className="mt-4 text-gray-400 dark:text-gray-400">
            테스트코인을 받을 주소를 입력하세요(1일 1회)
          </p>
          <div className='p-6'>
            <div className='flex flex-col gap-4'>
              <label
                htmlFor='walletAddress'
                className='text-sm font-medium text-gray-900 dark:text-white'>주소</label>
              <Input
                className='w-full bg-gray-100 dark:bg-gray-950'
                id='walletAddress'
                placeholder='tlink1????'
                value={addr}
                onChange={e => setAddr(e.target.value)}
              />
              <Button onClick={handleFaucetRequest}>
                10TFNSA 주세요
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

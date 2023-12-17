import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function Home() {
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
            <form>
              <div className='flex flex-col gap-4'>
                <label
                  htmlFor='walletAddress'
                  className='text-sm font-medium text-gray-900 dark:text-white'>주소</label>
                <Input
                  className='w-full bg-gray-100 dark:bg-gray-950'
                  id='walletAddress'
                  placeholder='tlink1????'
                />
                <Button>
                  10TFNSA 주세요
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

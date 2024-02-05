import { Sansita_Swashed } from 'next/font/google'
import Image from 'next/image'
import './globals.css';

const sansita = Sansita_Swashed({ subsets: ['latin'], weight: ['300', '400', '900'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[#262626]">
      <body className={sansita.className + ' text-white px-[2.5%] py-[32px]'}>
        <header className="flex-row w-full">
    	    <h1 className='text-6xl gap-6 font-bold w-[50%] items-left text-left'>
        	  Trader
    	    </h1>
          <div className='flex-row text-6xl gap-6 font-bold w-[50%] items-left text-left justify-end'>
            <h1 className='text-5xl gap-6 font-bold items-left text-left'>
        	    History
    	      </h1>
            <Image src="/blankpfp.png" alt="blank" width="64" height="64"></Image>
          </div>
  		  </header>
        {children}
      </body>
    </html>
  )
}

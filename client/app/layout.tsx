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
      <body className={sansita.className + ' text-white px-[2.5%] py-[32px] h-[100vh]'}>
        <header className="flex flex-row w-full">
    	    <h1 className='flex text-6xl gap-6 font-bold text-left w-[50%]'>
        	  Trader
    	    </h1>
          <div className='flex flex-row gap-6 font-bold justify-end items-center w-[50%]'>
            <h1 className='text-5xl font-bold items-center'>
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

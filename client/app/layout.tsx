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
        <header className="flex flex-row w-full pb-3">
    	    <a className="flex gap-6 w-[50%]" href="/"><h1 className='text-6xl font-bold text-left'>
        	  Trader
    	    </h1></a>
          <div className='flex flex-row gap-6 font-bold justify-end items-center w-[50%]'>
            <h1 className='text-5xl font-bold items-center'>
        	    History
    	      </h1>
            <a href="/account"><Image src="/blankpfp.png" alt="blank" width="64" height="64"></Image></a>
          </div>
  		  </header>
        {children}
      </body>
    </html>
  )
}

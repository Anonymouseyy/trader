import { Sansita_Swashed } from 'next/font/google'
import './globals.css';

const sansita = Sansita_Swashed({ subsets: ['latin'], weight: ['300', '400', '900'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[#262626]">
      <body className={sansita.className + ' text-white'}>{children}</body>
    </html>
  )
}

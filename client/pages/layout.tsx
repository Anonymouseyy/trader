import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({ subsets: ['latin'], weight: ['100', '300', '400', '700', '900'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[#1e2630] selection:bg-[#b4d5fe66]">
      <head>
        <meta name="color-scheme" content="dark" />
        {/* eslint-disable @next/next/no-css-tags */}
        <noscript><link rel="stylesheet" href="/noscript.css" /></noscript>
        {/* eslint-enable @next/next/no-css-tags */}
      </head>
      <body className={lato.className + ' text-white'}>{children}</body>
    </html>
  )
}

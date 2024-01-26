import type { Metadata } from 'next'
import './globals.css'
import NavBar from './NavBar/navbar'



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <NavBar/>
        <main>{children}</main>
        <div className='mb-10 pb-10'></div>
      </body>
    </html>
  )
}

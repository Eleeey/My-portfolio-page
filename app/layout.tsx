import type { Metadata } from 'next'

import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'



export const metadata: Metadata = {
  title: `laakasen's portfolio`,
  description: `Laakasen's frontend dev portfolio`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="px-6">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

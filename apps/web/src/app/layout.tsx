import './globals.css'

import type { Metadata } from 'next'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Project Manager SAAS-RBAC',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { LangProvider } from '@/hooks/use-lang'

export function RootWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const isAdminPath = pathname?.startsWith('/admin')
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null
    setIsAdmin(!!isAdminPath && !!token)
  }, [pathname])

  if (isAdmin) {
    return children
  }

  return (
    <LangProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </LangProvider>
  )
}

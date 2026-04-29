'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'

import { translations, type Lang } from '@/lib/i18n'

type LangCtx = {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: (key: string) => string
}

const Ctx = createContext<LangCtx | null>(null)

const DEFAULT_LANG: Lang = 'fr'

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('stella-lang')
      if (saved === 'fr' || saved === 'en') setLangState(saved)
    } catch {
      /* no-op */
    }
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem('stella-lang', l)
    } catch {
      /* no-op */
    }
  }, [])

  const toggle = useCallback(() => {
    setLang(lang === 'fr' ? 'en' : 'fr')
  }, [lang, setLang])

  const t = useCallback(
    (key: string) =>
      translations[lang][key] ?? translations.en[key] ?? key,
    [lang]
  )

  return (
    <Ctx.Provider value={{ lang, setLang, toggle, t }}>{children}</Ctx.Provider>
  )
}

export function useLang(): LangCtx {
  const ctx = useContext(Ctx)
  if (!ctx) {
    // Fallback safety — used during SSR or when component renders outside provider.
    const fallback: LangCtx = {
      lang: DEFAULT_LANG,
      setLang: () => {},
      toggle: () => {},
      t: (key: string) =>
        translations[DEFAULT_LANG][key] ?? translations.en[key] ?? key,
    }
    return fallback
  }
  return ctx
}
